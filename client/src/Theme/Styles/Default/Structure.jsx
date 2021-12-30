import { ColorThemes } from "../../ColorThemes";

export const Structure = {
  page: {
    // display: "flex",
    // flexWrap: "Wrap",
    // width: "100%",
    // height: "100vh",
    // justifyContent: "space-around",
    // alignContent: "flex-start",
  },

  header: {
    display: "flex",
    flexWrap: "wrap",
    height: "10vh",
    width: "100%",
    alignItems: "center",
    background: ColorThemes.white,
    zIndex: "10",
  },

  body: {
    // display: "flex",
    // flexWrap: "noWrap",
    // height: "82vh",
    // background: ColorThemes.white,
  },

  footer: {
    // display: "flex",
    // marginTop: "auto",
    // bottom: 0,
    // height: "8vh",
    // position: "sticky",
    // background: ColorThemes.kentivo,
  },
};
