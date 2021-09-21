import Colors from "./Colors";
import useColorScheme from "../hooks/useColorScheme";

const theme = useColorScheme();

export enum Fonts {
  heading = "ubuntu-reg",
  text = "inter-reg",
  textBold = "inter-bold",
  headingBold = "ubuntu-bold",
}

export default {
  h1: {
    fontFamily: Fonts.headingBold,
    fontSize: 35,
    color: Colors.grey100,
  },
  h2: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 30,
    color: Colors.grey100,
  },
  h3: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 26,
    color: Colors.grey100,
  },
  h4: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 20,
    color: Colors.grey100,
  },
  h6: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 18,
    color: Colors.grey100,
  },
};
