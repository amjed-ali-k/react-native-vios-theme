import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TextInput as FormTextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Typography";
import { IconName } from "../basic/Icons";
import { Text } from "../Themed";

interface ElementProps extends React.ComponentProps<typeof FormTextInput> {
  label?: string;
  placeholder?: string;
  width?: number;
  backgroundColor?: string;
  icon?: IconName;
  onChangeText?: (text: string) => void;
}

const TextInput = ({
  label,
  placeholder,
  width,
  backgroundColor,
  onChangeText,
  icon,
  ...otherProps
}: ElementProps): JSX.Element => {
  const [focused, setFocused] = useState({});

  const inputElement = useRef<FormTextInput>(null);
  const onPress = () => {
    inputElement.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { width, backgroundColor }, focused]}>
        <View style={styles.wrapper}>
          {label && <Text style={styles.label}>{label}</Text>}
          <FormTextInput
            ref={inputElement}
            focusable={true}
            onFocus={() => {
              setFocused(styles.textFocus);
            }}
            onEndEditing={() => setFocused({})}
            style={[styles.textarea, { backgroundColor }]}
            placeholder={placeholder}
            placeholderTextColor={Colors.grey100}
            onChangeText={onChangeText}
            {...otherProps}
          />
        </View>
        {icon && (
          <MaterialCommunityIcons
            size={30}
            color={Colors.grey200}
            style={styles.icon}
            name={icon}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 9,
    borderRadius: 9,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
  },
  textarea: {
    flex: 1,
    fontSize: 18,
    fontFamily: Fonts.text,
  },
  textFocus: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 8,
  },
  label: {
    fontFamily: Fonts.text,
  },
  icon: {},
});