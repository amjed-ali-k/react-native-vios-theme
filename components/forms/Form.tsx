import React from "react";
import { Formik, FormikConfig } from "formik";


const Form = <Value extends {}>({ initialValues, onSubmit, validationSchema, children }: FormikConfig<Value>):JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
};

export default Form;