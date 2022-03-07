const themeMode = (mode) => ({
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
        }),
  },
});

export default themeMode;
