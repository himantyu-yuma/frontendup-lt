import { Text } from "../text"

export const Header = () => {
  return (
    <header style={headerStyle}>
      <Text as="h1" size="xl" bold>
        Portfolio
      </Text>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#333",
  color: "#fff",
}
