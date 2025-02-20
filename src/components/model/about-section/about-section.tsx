import { Icon, Text } from "../../ui"

export const AboutSection = () => {
  return (
    <section className="about_me" style={rootStyle}>
      <div style={bodyStyle}>
        <Text as="h2" size="xl" bold>
          About me
        </Text>
        <div style={contentsStyle}>
          <Icon />
          <div style={profileStyle}>
            <Text as="span" bold>
              Hoge太郎
            </Text>
            <Text as="p">
              webフロントエンドエンジニアです。 東京都在住。
              2015年からフロントエンドエンジニアとして働いています。
              趣味は読書とランニングです。
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

const rootStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
}

const bodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  maxWidth: "50rem",
}

const contentsStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "1rem",
}

const profileStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginLeft: "1rem",
}
