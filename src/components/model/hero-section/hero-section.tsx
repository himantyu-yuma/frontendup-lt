import { VFXDiv } from "react-vfx"
import { Text } from "../../ui"

export const HeroSection = () => {
  return (
    <VFXDiv shader="rgbGlitch">
    <section className="hero-section" style={heroSectionStyle}>
      <Text as="span" size="xxl">
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
