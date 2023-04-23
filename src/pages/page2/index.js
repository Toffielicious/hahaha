import { Inter } from 'next/font/google'
import Title from '@components/title/message2'
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";



const inter = Inter({ subsets: ['latin'] })




const validate = (values) => {
  const errors = {};
  // if (!values.firstName) {
  //   errors.firstName = "*";
  // }
  // if (!values.lastName) {
  //   errors.lastName = "*";
  // }
  // if (!values.password) {
  //   errors.password = "*";
  // }
  if (!values.email) {
    errors.email = "!";
  } else if (
    !/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  else if (
    !/^\d{11}$/.test(values.email)
  ) {
    errors.email = "Invalid number";
  }


  // // if (!values.gender) {
  // //   errors.gender
  // // }
  // return errors;
};


const FormsFormik = () => {

  // const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(70, "Too Long!")
  //     .required("First Name is Required"),
  //   lastName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(70, "Too Long!")
  //     .required("Last Name is Required"),
  //   age: Yup.number().required("Age is Required"),
  // });

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.emailNum) {
  //     errors.emailNum = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailNum) && !/^\d{10}$/i.test(values.emailNum)) {
  //     errors.emailNum = 'Invalid email or phone number';
  //   }

  //   return errors;
  // };


  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("!"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("!"),
    email: Yup.string()
      .required("Email or phone number is required"),
    // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Invalid email or phone number"),
    // .matches((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/) | (/^\d{11}$/), "Invalid email or phone number"),
    // .matches(/^\d{11}$/, "Invalid email or phone number"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is Required"),
  });

  const [submittedValues, setSubmittedValues] = useState(null);



  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmittedValues(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

    postUsers(values);

  };



  const pronoun = [
    { value: "She", label: "She: 'We wish her a happy birthday!'" },
    { value: "He", label: "He: 'We wish him a happy birthday!'" },
    { value: "They", label: "They: 'We wish them a happy birthday!'" },
  ];

  const [showPronounField, setShowPronounField] = useState(false);

  const handleCustomClick = (event) => {
    if (event.target.value === "custom") {
      setShowPronounField(true);
    } else {
      setShowPronounField(false);
    }
  };

  // const api = "https://api.ahglab.com/api:W7k9W8HQ/users"
  // const [postStatus, setPostStatus] = useState();
  

  // // const postPosts = (passValue) => {
  // //     console.log("passValue == ", passValue);
  // //     axios.post(`'${api},/posts`, {
  // //       id: passValue?.id,
  // //       firstName: passValue?.firstName,
  // //       last_name: passValue?.last_name,
  // //       credentials: passValue?.credentials,
  // //       pronoun: passValue?.pronoun,
  // //       gender: passValue?.gender,
  // //     })
  // //     .then(function (response) {
  // //       setPostStatus(response?.status);
  // //       console.log(response);
  // //     });
  // //   }

  

    const initialValues = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      pronoun: "",
      gender: "",
    };

    const postUsers = (passValue) => {
      console.log("passValue == ", passValue);
      axios.post('https://api.ahglab.com/api:W7k9W8HQ/users', {
        first_name: passValue?.firstName,
        last_name: passValue?.lastName,
        credentials: passValue?.email,
        password: passValue?.password,
        birthdate: passValue.month,
        pronoun: passValue?.pronoun,
        gender: passValue?.gender,
       
      })
      .then(function (response) {
        console.log('Post request successful!');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
    };

    const [data, setData] = useState([]);

    const getPosts = () =>{
      axios
      .get('https://api.ahglab.com/api:W7k9W8HQ/users')
      .then(function(response){
        // console.log(response);
        setData(response?.data);
      });
    }

    useEffect(() => {
      getPosts(); 
    }, [data]);

    // axios.post('https://api.ahglab.com/api:W7k9W8HQ/users', initialValues)
    //   .then(response => {
    //     console.log('Post request successful!');
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error posting data:', error);
    //   });

    return (
      <div>

        <Formik
          initialValues={initialValues}
          // postPosts={postPosts}
          validate={validate}
          onSubmit={onSubmit}
          validationSchema={SignupSchema}

        >


          {({ resetForm }) => (
            <div class='signup'>
              <div class="top">
                <div>
                  <h2>Sign Up</h2>
                  <p>It's quick and easy</p>
                </div>

              </div>


              <Form>
                <div class="signup_body">
                  <div class='name'>
                    <Field type="text" name="firstName" id="firstName" required placeholder="First name" class="same" style={{ backgroundColor: '#f5f6f7', borderRadius: '5px' }} />
                    <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                    <Field type="text" name="lastName" required placeholder="Last name" class="same" style={{ backgroundColor: '#f5f6f7', borderRadius: '5px' }} />
                    <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                  </div>
                  <div class='bottom'>
                    {/* <input type='text' placeholder='Mobile number or email'></input> */}
                    <Field type="email" class="num" required name="email" style={{ backgroundColor: '#f5f6f7', borderRadius: '5px' }} placeholder='Mobile number or email' />
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    {/* <input type='password' placeholder='New password'></input> */}
                    <Field type='password' class='num' name="password" style={{ backgroundColor: '#f5f6f7', borderRadius: '5px' }} placeholder='New password' />
                    <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                  </div>
                </div>
                <div class="birthday">
                  <p class="text" style={{ paddingBottom: '8px' }}>Birthday</p>
                  <div style={{ marginBottom: '0px', paddingBottom: '0px' }} class='date'>
                    <div class="text">
                      <Field name="month" as="select" required style={{ borderRadius: '5px' }}>
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
                      <Field name="day" as="select" required style={{ borderRadius: '5px' }}>
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                      </Field>
                    </div>
                    <div class="form-group">
                      <Field name="year" as="select" required style={{ borderRadius: '5px' }}>
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
                    <div class="gender">
                      <p class="text">Gender</p>
                      <div class="person">
                        <div style={{ borderRadius: '5px' }}>
                          <label htmlFor="female" style={{ fontFamily: 'sans-serif' }}>Female</label>
                          <input type="radio" onClick={handleCustomClick} id="female" {...field} value="female" />
                        </div>
                        <div style={{ borderRadius: '5px' }}>
                          <label htmlFor="male" style={{ fontFamily: 'sans-serif' }}>Male</label>
                          <input type="radio" onClick={handleCustomClick} class="male" id="male" {...field} onclick="hidePronounField()" value="male" />
                        </div>
                        <div style={{ borderRadius: '5px' }}>
                          <label htmlFor="custom" style={{ fontFamily: 'sans-serif' }}>Custom</label>
                          <Field onClick={handleCustomClick} type="radio" id="custom" {...field} name="gender" value="custom" />
                        </div>
                      </div>
                    </div>
                  )}
                </Field>
                <ErrorMessage name="gender" required component="div" className="error" />

                {showPronounField && (<div id="pronoun-field" >
                  <Field as="select" style={{ borderRadius: '5px' }} name="pronoun" placeholder="Select your pronoun" class="pronoun">
                    <option value="">Select your pronoun</option>
                    {pronoun.map((pronoun) => (
                      <option key={pronoun.value} value={pronoun.value}>
                        {pronoun.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="pronoun" />
                  <p class="vis" style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '10px' }}>Your pronoun is visible to everyone.</p>
                  <Field type="text" value="" class='pronoun' id="custom" style={{ backgroundColor: '#f5f6f7', borderRadius: '5px' }} placeholder='Gender (Optional)' />
                </div>)}



                <div class='content'>
                  <p>People who use our service may have uploaded your contact information to Facebook. <span class="blue">Learn more</span></p>
                  <p>By clicking Sign Up, you agree to our Terms, <span class="blue">Privacy Policy and Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>
                </div>
                <button class="signin" type='submit'>sign up</button>
                {submittedValues && (
                  <p>{submittedValues}</p>
                )}
              </Form>
            </div>)}
        </Formik>

        <section>
          <a style={{ marginTop: '700px', width: '150px' }} href="../../../page3">Next</a>
        </section>

        <div>
          <p style={{textAlign:'center'}}>KUNIN AT TANGGAPIN</p>
          {data.map((user) => (
              <tr key={user.id}>
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
                <td>{user.gender}</td>
                <td>{user.birthdate}</td>
                <td>{user.credentials}</td>
                
                
              </tr>
            ))}
        </div>

      </div>

    );
  };

  export default FormsFormik;
