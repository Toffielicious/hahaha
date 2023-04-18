import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const App = () => (
  <>
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      
      <Form>
        <div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        </div>
      </Form>
      
      
    )}
  </Formik>
  <a href="../../../page3">Next</a>
  <br />
  <a href="../../../page2">Back</a>
  </>
);

export default App;
