export type ThemeShaderColors = {
  glow: [number, number, number]
  base: [number, number, number]
}

const TARGET_GLOW_LUMINANCE = 0.22
const FALLBACK_PRIMARY: [number, number, number] = [0.545, 0, 0]

function luminance(r: number, g: number, b: number) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function clampChannel(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    Number.parseInt(clean.slice(0, 2), 16) / 255,
    Number.parseInt(clean.slice(2, 4), 16) / 255,
    Number.parseInt(clean.slice(4, 6), 16) / 255,
  ]
}

export function readThemeShaderColors(): ThemeShaderColors {
  const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--theme-primary')
    .trim()

  const [r, g, b] = primary.startsWith('#') ? hexToRgb(primary) : FALLBACK_PRIMARY
  const lum = luminance(r, g, b)
  const scale = lum > 0.001 ? TARGET_GLOW_LUMINANCE / lum : 1

  return {
    glow: [
      clampChannel(r * scale),
      clampChannel(g * scale),
      clampChannel(b * scale),
    ],
    base: [
      clampChannel(0.01 + r * 0.05),
      clampChannel(0.01 + g * 0.035),
      clampChannel(0.01 + b * 0.035),
    ],
  }
}
