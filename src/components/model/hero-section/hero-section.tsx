import { VFXDiv } from "react-vfx"
import { Text } from "../../ui"

export const HeroSection = () => {
  const shader = `
// https://github.com/fand/vfx-js/blob/96b1affcd21f99bf6ea6e8f47e0baac8541d6c23/packages/vfx-js/src/constants.ts#L57-L100
precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform sampler2D src;
out vec4 outColor;

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hueShift(vec3 rgb, float t) {
    vec3 hsv = rgb2hsv(rgb);
    hsv.x = fract(hsv.x + t);
    return hsv2rgb(hsv);
}

void main() {
    // // Get UV in the element
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    vec2 uv2 = uv;
    uv2.x *= resolution.x / resolution.y;

    float x = (uv2.x - uv2.y) -fract(time);

    vec4 img = texture(src, uv);
    float gray = length(img.rgb);

    img.rgb = vec3(hueShift(vec3(1,0,0), x) * gray);

    outColor = img;
}
  `
  return (
    <VFXDiv shader={"rgbGlitch"}>
      <section className="hero-section" style={heroSectionStyle}>
        <Text as="span" size="xxl" bold>
          Welcome to My Portfolio
        </Text>
      </section>
    </VFXDiv>
  )
}

const heroSectionStyle: React.CSSProperties = {
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50lvh",
  textAlign: "center",
}
