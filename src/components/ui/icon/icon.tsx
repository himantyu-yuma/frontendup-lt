import { useEffect, useState } from "react"
import { VFXDiv, VFXImg } from "react-vfx"
import faceSVG from "../../../assets/face.svg"

export const Icon = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const shader = `
  uniform vec2 resolution;
  uniform vec2 offset;
  uniform vec2 mouse;
  uniform float time;
  uniform float dist;
  uniform sampler2D src;
  out vec4 outColor;

  vec2 focus(vec2 uv, vec2 c, float mag, float z) {
    return mix(
        uv,
        // uvからcへのベクトルを縮小してcに近づける
        (uv - c) * mag + c,
        z
    );
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    // マウスの位置を正規化
    vec2 muv = (mouse - offset) / resolution;
    // マウスからの距離
    vec2 d = uv - muv;
    d.x *= resolution.x / resolution.y;
    // マウスからの距離を指数関数で変換
    float zoom = exp(smoothstep(0., 1., length(d)) * -5.);

    uv = focus(uv, muv, 0.1, zoom);

    vec4 c = texture2D(src, uv);
    
    outColor = vec4(
      c.rgb,
      step(.1, c.a)
    );
  }
  `

  return (
    <VFXDiv shader={shader}>
      <img src={faceSVG} width={100} alt="face" />
    </VFXDiv>
  )
}
