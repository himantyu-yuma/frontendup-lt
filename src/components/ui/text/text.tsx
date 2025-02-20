type Props = {
  children: React.ReactNode
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  bold?: boolean
}

export const Text = ({ children, as, size = "md", bold = false }: Props) => {
  const Component = as
  return (
    <Component
      style={{
        ...getTextSizeStyle(size),
        ...getWeightStyle(bold),
      }}
    >
      {children}
    </Component>
  )
}

const getTextSizeStyle = (size: Props["size"]) => {
  switch (size) {
    case "xxs":
      return { fontSize: "0.5rem" }
    case "xs":
      return { fontSize: "0.75rem" }
    case "sm":
      return { fontSize: "0.875rem" }
    case "md":
      return { fontSize: "1rem" }
    case "lg":
      return { fontSize: "1.25rem" }
    case "xl":
      return { fontSize: "1.5rem" }
    case "xxl":
      return { fontSize: "2rem" }
    default:
      return { fontSize: "1rem" }
  }
}

const getWeightStyle = (bold: Props["bold"]) => {
  return bold ? { fontWeight: "bold" } : {}
}
