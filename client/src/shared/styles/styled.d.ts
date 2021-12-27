import "styled-components";

/* local interface */
interface IPalette {
  mainText: string;
  secondaryText: string;
  borderColor: string;
}

/* shared interfaces */
export enum Colors {
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
}

declare module "styled-components" {
  export interface DefaultTheme {
    boardCardBorderRadius: string;
    tagBorderRadius: string;

    palette: {
      tagColors: {
        red: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        indigo: string;
        violet: string;
      };

      buttonColors: {
        buttonHoverBackgroundColor: string;
        buttonActiveBackgroundColor: string;
      };

      colors: {
        main: IPalette;
        secondary: IPalette;
      };
    };
  }
}
