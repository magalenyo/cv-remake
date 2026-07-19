export const ANIMATION2_VERTEX_SHADER = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

export const ANIMATION2_SCANLINE_FREQUENCY = 1000.0
export const ANIMATION2_SCANLINE_AMPLITUDE = 0.01

export const ANIMATION2_STATIC_FRAGMENT_SHADER = `precision mediump float;
uniform vec3 u_base_tint;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec3 color = u_base_tint;
  color += sin(uv.y * ${ANIMATION2_SCANLINE_FREQUENCY}) * ${ANIMATION2_SCANLINE_AMPLITUDE};
  gl_FragColor = vec4(color, 1.0);
}`
