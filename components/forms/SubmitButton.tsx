import * as React from "react";
import { useFormikContext } from "formik";

import Button, { ButtonProps } from "../basic/Button";

const SubmitButton = ({  type, gradient = "primary", onPress, ...otherProps }: ButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      type={type}
      gradient={gradient}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
};

export default SubmitButton;