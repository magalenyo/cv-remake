import { useEffect, useRef } from 'react'
import {
  ANIMATION2_STATIC_FRAGMENT_SHADER,
  ANIMATION2_VERTEX_SHADER,
} from '../../shaders/animation2'
import { readThemeShaderColors } from '../../utils/themeColors'
import { createFullscreenQuadProgram, syncCanvasSize } from '../../utils/webglFullscreenQuad'

type Animation2GridBackgroundProps = {
  visible?: boolean
}

export function Animation2GridBackground({ visible = true }: Animation2GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!visible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!context) return

    const gl = context as WebGLRenderingContext

    syncCanvasSize(canvas)

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => syncCanvasSize(canvas)) : null
    resizeObserver?.observe(canvas)

    const resources = createFullscreenQuadProgram(
      gl,
      ANIMATION2_VERTEX_SHADER,
      ANIMATION2_STATIC_FRAGMENT_SHADER,
    )
    if (!resources) return

    const { program, vertexShader, fragmentShader, buffer } = resources
    const uBaseTint = gl.getUniformLocation(program, 'u_base_tint')

    let frameId = 0

    const render = () => {
      if (!resizeObserver) syncCanvasSize(canvas)

      gl.viewport(0, 0, canvas.width, canvas.height)

      const { base } = readThemeShaderColors()
      if (uBaseTint) gl.uniform3f(uBaseTint, base[0], base[1], base[2])

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      frameId = window.requestAnimationFrame(render)
    }

    frameId = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(buffer)
    }
  }, [visible])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 bg-black transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
