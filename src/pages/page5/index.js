import { Inter } from 'next/font/google'
import Title from '@components/title/message2'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const inter = Inter({ subsets: ['latin'] })


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};


// let error;
// const emailRegex = /\S+@\S+\.\S+/;
// const mobileRegex = /^[1-9][0-9]{9}$/;
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "*";
  }
  if (!values.lastName) {
    errors.lastName = "*";
  }
  if (!values.password) {
    errors.password = "*";
  }
  if (!values.email) {
    errors.email = "*";
  } 
  else if (
    !/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  // else if(!/^[0-9]{9,}$/.test(values.email)){
  //   errors.email = "Invalid number";
  // }
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    `I'm ${values?.firstName} ${values?.lastName} and I'm ${values?.age} years old`;
    setSubmitting(false);
  }, 400);
};



const FormsFormik = () => {

  return (
    <div>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div class='signup'>
            <div class="top">
              <div>
                <h2>Sign Up</h2>
                <p style={{ paddingTop: '0px' }}>It's quick and easy</p>
              </div>
            </div>

            <Form>
              <div class="signup_body">
                <div class='name'>
                  <Field type="text" name="firstName" placeholder="First name" class="same" />
                  <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                  <Field type="text" name="lastName" placeholder="Last name" class="same" />
                  <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                </div>
                <div class='bottom'>
                  {/* <input type='text' placeholder='Mobile number or email'></input> */}
                  <Field type="email" name="email" placeholder='Mobile number or email' />
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                  {/* <input type='password' placeholder='New password'></input> */}
                  <Field type='password' name="password" placeholder='New password' />
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </div>
              </div>
              <div class="birthday">
                <p class="text">Birthday</p>
                <div class='date'>
                  <div class="text">
                    <Field name="month" as="select" required>
                      <option value="">Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </Field>
                  </div>
                  <div class="form-group">
                    <Field name="day" as="select" required>
                      <option value="">Day</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </Field>
                  </div>
                  <div class="form-group">
                    <Field name="year" as="select" required>
                      <option value="">Year</option>
                      {[...Array(25)].map((_, i) => (
                        <option key={i} value={1999 + i}>{1999 + i}</option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>
              <Field name="gender">
                {({ field }) => (
                  <div className="gender">
                    <p className="text">Gender</p>
                    <div className="person">
                      <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" {...field} value="female" />
                      </div>
                      <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" {...field} value="male" />
                      </div>
                      <div>
                        <label htmlFor="custom">Custom</label>
                        <input type="radio" id="custom" {...field} value="custom" />
                      </div>
                    </div>
                  </div>
                )}
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />


              <div id="pronoun-field" >
                <Field placeholder="Select your pronoun" as="select" >
                  <option value="" default>Select your pronoun</option>
                  <option value="She">She: "Wish her a happy birthday!"</option>
                  <option value="He">He: "Wish him a happy birthday!"</option>
                  <option value="They">Them: "Wish them a happy birthday!"</option>
                </Field>
                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '10px' }}>Your pronoun is visible to everyone.</p>
                {/* <Field type="email" name="email" placeholder='Gender (Optional)' /> */}
              </div>

              <div class='content'>
                <p>People who use our service may have uploaded your contact information to Facebook. <span class="blue">Learn more</span></p>
                <p>By clicking Sign Up, you agree to our Terms, <span class="blue">Privacy Policy and Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>
              </div>
              {/* disabled={isSubmitting} */}
              <button  class="signin" type='submit'>sign up</button>

            </Form>
          </div>)}
      </Formik>

      <a style={{ marginTop: '700px', width: '150px' }} href="../../../page3">Next</a>

    </div>

  );
};

export default FormsFormik;
