import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name']
interface ElementProps extends  React.ComponentProps<typeof MaterialCommunityIcons>{
  name: IconName
}
const Icon = ({
  color = Colors.primary,
  size = 24,
  name = "account",
  ...otherProps
}:ElementProps ): JSX.Element => {
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
