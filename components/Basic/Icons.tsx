import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";


const Icon = ({
  color = Colors.primary,
  size = 24,
  name = "account",
  ...otherProps
}: React.ComponentProps<typeof MaterialCommunityIcons>): JSX.Element => {
  return (
    <MaterialCommunityIcons
      name={name}
      color={color}
      size={size}
      {...otherProps}
    />
  );
};

export default Icon;
