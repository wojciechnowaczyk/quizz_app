const themeMode = (mode) => ({
  typography: {
    h2: {
      fontWeight: "500",
    },
  },
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#fff",
          },
        }
      : {
          background: {
            default: "#000",
          },
          primary: {
            main: "#ffffff",
          },
        }),
  },
});

export default themeMode;
