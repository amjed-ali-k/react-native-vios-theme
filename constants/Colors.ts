import useColorScheme from "../hooks/useColorScheme";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const theme = useColorScheme();

interface colors {
  light: pallate;
  dark: pallate;
}

interface pallate {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  secondary: string;
  warning: string;
  danger: string;
  medium: string;
  light: string;
  dark: string;
  black: string;
  white: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  fuchsiaBlue: string;
  redOrange: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  greenAlt: string;
  blue: string;
  blueAlt: string;
  purple: string;
}

export const colors: colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    primary: "#5B3DF6",
    secondary: "#2A9D8F",
    warning: "#E9C46A",
    danger: "#E76F51",
    medium: "#6e6969",
    light: "#f8f4f4",
    dark: "#023047",
    black: "#000000",
    white: "#ffffff",
    grey100: "#333333",
    grey200: "#4F4F4F",
    grey300: "#828282",
    grey400: "#BDBDBD",
    grey500: "#E0E0E0",
    grey600: "#F2F2F2",
    grey700: "#F8F8F8",
    fuchsiaBlue: "#8A3FBE",
    redOrange: "#FB413A",
    red: "#EB5757",
    orange: "#F2994A",
    yellow: "#F2C94C",
    green: "#219653",
    greenAlt: "#27AE60",
    blue: "#2F80ED",
    blueAlt: "#2D9CDB",
    purple: "#9B51E0",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    primary: "#5B3DF6",
    secondary: "#2A9D8F",
    warning: "#E9C46A",
    danger: "#E76F51",
    medium: "#6e6969",
    light: "#f8f4f4",
    dark: "#023047",
    black: "#000000",
    white: "#ffffff",
    grey100: "#333333",
    grey200: "#4F4F4F",
    grey300: "#828282",
    grey400: "#BDBDBD",
    grey500: "#E0E0E0",
    grey600: "#F2F2F2",
    grey700: "#F8F8F8",
    fuchsiaBlue: "#8A3FBE",
    redOrange: "#FB413A",
    red: "#EB5757",
    orange: "#F2994A",
    yellow: "#F2C94C",
    green: "#219653",
    greenAlt: "#27AE60",
    blue: "#2F80ED",
    blueAlt: "#2D9CDB",
    purple: "#9B51E0",
  },
};

export default colors[theme];
