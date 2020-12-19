const getThemeColor = () => {
  // typeof para o gatsby não quebra no build
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
