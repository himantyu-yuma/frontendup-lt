import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "the-new-css-reset/css/reset.css"
import App from "./App.tsx"

const root = document.getElementById("root")
if (!root) throw new Error('No element with id "root"')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
