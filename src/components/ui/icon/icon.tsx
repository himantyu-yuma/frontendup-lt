import { VFXDiv, VFXImg } from "react-vfx"
import faceSVG from "../../../assets/face.svg"

export const Icon = () => {
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
        // uvからcへのベクトルをmag倍してcに足す
        // 1より小さいときはcから遠ざかる
        // 1より大きいときはcに近づく
        (uv - c) * mag + c,
        z
    );
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    // outColor = vec4(uv, 0., 1.);

    // マウスの位置を正規化
    vec2 muv = (mouse - offset) / resolution;
    // マウスからの距離
    vec2 d = uv - muv;
    d.x *= resolution.x / resolution.y;
    // マウスからの距離を指数関数で変換
    float zoom = exp(mix(0., 1., length(d)) * -5.);

    // uvを変形（マウスの位置に応じて距離を調整）
    uv = focus(uv, muv, 0.1, zoom);
    outColor = vec4(uv, 0., 1.);

    vec4 c = texture2D(src, uv);
    
    outColor = vec4(
      c.rgb,
      step(.1, c.a)
    );
  }
  `
  return <VFXImg width="100" src={faceSVG} alt="" shader={shader} />
}
