// import the DefaultTheme we declaration merged in "styled.d.ts"
import { DefaultTheme } from "styled-components";

// now we can define our defaultTheme with our new typed properties
export const defaultTheme: DefaultTheme = {
  boardCardBorderRadius: "7px",
  tagBorderRadius: "4px",
  palette: {
    // NOTE: when I initialize section, I will use these default values for tag colors
    tagColors: {
      red: "rgba(250, 10, 10, 0.64)",
      orange: "rgba(248, 148, 77, 0.81)",
      yellow: "rgb(232, 236, 8)",
      green: "rgba(15, 255, 39, 0.44)",
      blue: "rgba(15, 187, 255, 0.34)",
      indigo: "rgba(39, 15, 255, 0.34)",
      violet: "rgba(183, 15, 255, 0.34)",
    },

    buttonColors: {
      buttonHoverBackgroundColor: "#e3e3e0",
      buttonActiveBackgroundColor: "#a1a19e",
    },

    colors: {
      main: {
        mainText: "black",
        secondaryText: "black",
        borderColor: "rgb(204, 204, 204)",
      },
      secondary: {
        mainText: "white",
        secondaryText: "white",
        borderColor: "rgb(204, 204, 204)",
      },
    },
  },
};
