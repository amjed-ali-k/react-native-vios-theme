// import useColorScheme from "../hooks/useColorScheme";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

// const theme = useColorScheme();
const theme = "light";

// Dark and Light Color Palette
const lightColorPalette = {
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
};

const darkColorPalette = {
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
};

export type ColorPalette = typeof lightColorPalette & typeof darkColorPalette;

export const colors: TypesOfColors = {
  light: lightColorPalette,
  dark: darkColorPalette,
};
export interface TypesOfColors {
  light: ColorPalette;
  dark: ColorPalette;
}

export const gradient = {
  primary: ["#E64053", "#E14058", "#713EDC"],
  secondary: ["#E64053", "#E14058", "#713EDC"],
  danger: ["#E64053", "#E14058", "#713EDC"],
  success: ["#E64053", "#E14058", "#713EDC"],
  white: ["#E64053", "#E14058", "#713EDC"],
  black: ["#E64053", "#E14058", "#713EDC"],
};

// Primary Color Types | Colors included in Gradient and Normal Palette
export type PrimaryColorTypes = keyof typeof gradient &
  keyof typeof lightColorPalette &
  keyof typeof darkColorPalette;

export default colors[theme];
