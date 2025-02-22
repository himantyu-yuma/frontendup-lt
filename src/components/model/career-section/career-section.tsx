import { VFXSpan } from "react-vfx"
import { Text } from "../../ui"

/**
 * 経歴
 */
export const CareerSection = () => {
  return (
    <section className="Career" style={rootStyle}>
      <div style={bodyStyle}>
        <VFXSpan shader="shine">
          経歴
        </VFXSpan>
        <ul>
          <li>
            <Text as="span">2019年4月 〜 現在: 株式会社A</Text>
          </li>
          <li>
            <Text as="span">2017年4月 〜 2019年3月: 株式会社B</Text>
          </li>
          <li>
            <Text as="span">2015年4月 〜 2017年3月: 株式会社C</Text>
          </li>
        </ul>
      </div>
    </section>
  )
}

const rootStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "darkgray"
}

const bodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  maxWidth: "50rem",
  gap: "1rem",
}
