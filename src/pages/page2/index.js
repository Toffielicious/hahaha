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

const FormsFormik = () => {

  return (
    <div>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (<div class='signup'>
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
                <select name="" id="">
                  <option name="Jan">Jan</option>
                  <option name="Feb">Feb</option>
                  <option name="Mar">Mar</option>
                  <option name="Apr">Apr</option>
                  <option name="May">May</option>
                  <option name="Jun">Jun</option>
                  <option name="Jul">Jul</option>
                  <option name="Aug">Aug</option>
                  <option name="Sep">Sep</option>
                  <option name="Oct">Oct</option>
                  <option name="Nov">Nov</option>
                  <option name="Dec">Dec</option>
                </select>
                <select>
                  <option name="">1</option>
                  <option name="">2</option>
                  <option name="">3</option>
                  <option name="">4</option>
                  <option name="">5</option>
                  <option name="">6</option>
                  <option name="">7</option>
                  <option name="">8</option>
                  <option name="">9</option>
                  <option name="">10</option>
                  <option name="">11</option>
                  <option name="">12</option>
                  <option name="">12</option>
                  <option name="">13</option>
                  <option name="">14</option>
                  <option name="">15</option>
                  <option name="">16</option>
                  <option name="">17</option>
                  <option name="">18</option>
                  <option name="">19</option>
                  <option name="">20</option>
                  <option name="">21</option>
                  <option name="">23</option>
                  <option name="">24</option>
                  <option name="">25</option>
                  <option name="">26</option>
                  <option name="">27</option>
                  <option name="">27</option>
                  <option name="">28</option>
                  <option name="">29</option>
                  <option name="">30</option>
                  <option name="">31</option>
                </select>
                <select>
                  <option name="">1999</option>
                  <option name="">2000</option>
                  <option name="">2001</option>
                  <option name="">2002</option>
                  <option name="">2003</option>
                  <option name="">2004</option>
                  <option name="">2005</option>
                  <option name="">2006</option>
                  <option name="">2007</option>
                  <option name="">2008</option>
                  <option name="">2009</option>
                  <option name="">2010</option>
                  <option name="">2011</option>
                  <option name="">2012</option>
                  <option name="">2013</option>
                  <option name="">2014</option>
                  <option name="">2015</option>
                  <option name="">2016</option>
                  <option name="">2016</option>
                  <option name="">2017</option>
                  <option name="">2018</option>
                  <option name="">2019</option>
                  <option name="">2020</option>
                  <option name="">2021</option>
                  <option name="">2022</option>
                  <option name="">2023</option>
                </select>
              </div>
            </div>
            <div class="gender">
              <p class="text">Gender</p>
              <div class="person">
                <div>
                  <label for="female">Female</label>
                  <input type="radio" id="female"></input>
                </div>
                <div>
                  <label for="male">Male</label>
                  <input type="radio" id="male"></input>
                </div>
                <div>
                  <label for="custom">Bading</label>
                  <input type="radio" id="custom"></input>
                </div>
              </div>
            </div>

            <div class='content'>
              <p>People who use our service may have uploaded your contact information to Facebook. <span class="blue">Learn more</span></p>
              <p>By clicking Sign Up, you agree to our Terms, <span class="blue">Privacy Policy and Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>
            </div>
            <button disabled={isSubmitting} class="signin" type='submit'>sign up</button>

          </Form>
        </div>)}
      </Formik>

      <a style={{ marginTop: '700px', width: '150px' }} href="../../../page3">Next</a>

    </div>

  );
};

export default FormsFormik;
