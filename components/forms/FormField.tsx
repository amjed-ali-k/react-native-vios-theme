import React from "react";
import { useFormikContext } from "formik";

import TextInput from "./FormTextInput";
import ErrorMessage from './ErrorMessage';

interface ElementProps<Values> extends React.ComponentProps<typeof TextInput>{
   name: keyof Values
}
type ValuesType = {
    [key: string]: string
}
const FormField = <Values extends ValuesType>({ name, width, onChangeText, ...otherProps }:ElementProps<Values>) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<Values>();
  return (
    <React.Fragment>
      <TextInput
        onBlur={() => {
          setFieldTouched(name.toString());
        }}
        onChangeText={(text) => {
          setFieldValue(name.toString(), text);
        }}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name] as boolean} error={errors[name] as string} />
    </React.Fragment>
  );
};

export default FormField;