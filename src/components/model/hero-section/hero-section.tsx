import { Text } from "../../ui"

export const HeroSection = () => {
  return (
    <section className="hero-section" style={heroSectionStyle}>
      <Text as="span" size="xxl">
        Welcome to My Portfolio
      </Text>
    </section>
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
