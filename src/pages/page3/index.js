import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const styles = {
    container: {
        backgroundColor: "whitesmoke",
        width: "98%",
        height: "100%",
        borderRadius: "5px",
        paddingBottom: "10px",
    },

    label: {
        padding: "5px",
        fontSize: "12px",
        fontFamily:"SFProText-Medium, Helvetica, Arial, sans-serif",
    },

    radioLabel: {
      border: "black",
      borderWidth: "1px",
      padding: "5px",
      marginBottom: "5px",
      borderStyle: "solid",
      borderRadius:"5px",
      boxSizing: "border-box",
      color: "#1c1e21",
      display: "inline-block",
      fontSize: "15px",
      fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
      lineHeight: "36px",
      padding: "0 28px 0 10px",
      width: "100%",
      margin: "5px",
      backgroundColor:"lightgray"
  },

    option: {
      width: "100%",
      height: "40px",
      fontSize: "14px",
      padding: "5px",
      margin: "5px",
      color: "black",
      borderRadius: "5px",
      backgroundColor: "lightgray",
    },

    radioButton: {
        border: "2px",
        appearance: "auto",
        borderRadius: "5px",
    },
    
    input: {
      width: "100%",
      height: "40px",
      fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
      fontSize: "18px",
      padding: "5px",
      margin: "5px",
      color: "black",
      borderRadius: "5px",
      backgroundColor: "lightgray",
    },
    p: {
        fontSize: "10px",
        paddingLeft: "7px",
        fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    },
    p2: {
        fontSize: "10px",
        paddingLeft: "7px",
        paddingTop: "5px",
        paddingBottom: "10px",
        fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    },
    signUpButton: {
        width: "40%",
        height: "40px",
        fontSize: "14px",
        fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "green",
        borderRadius: "5px",
    },
  }  

  

  // const patchPosts = (passValue) => {
  //   console.log("passValue == ", passValue);
  //   axios
  //     .patch(`${api}/posts/1`, {
  //       id	: passValue?.id,
  //       firstName: passValue?.firstName,
  //       lastName: passValue?.lastName,
  //       emailNum: passValue?.emailNum,
  //       password: passValue?.password,
  //       month: passValue?.month,
  //       day: passValue?.day,
  //       year: passValue?.year,
  //       gender: passValue?.gender,
  //       pronoun: passValue?.pronoun,
  //       customGender: passValue?.customGender,
  //       // body: passValue?.body, --> include one key only for PUT
  //     })
  //     .then(function (response) {
  //       setPatchStatus(response?.status);
  //     });
  // };

  // const deletePosts = (passValue) => {
  //   axios.delete(`${api}/posts/${passValue?.id}`).then(function (response) {
  //     setDeleteStatus(response?.status);
  //   });
  // };


const FormsFormik = () => {
    const api = "https://api.ahglab.com/api:W7k9W8HQ/users";
    const [data, setData] = useState();
    const [postStatus, setPostStatus] = useState();
    const [patchStatus, setPatchStatus] = useState();
    const [deleteStatus, setDeleteStatus] = useState();

    
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("First Name is Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Last Name is Required"),
    emailNum: Yup.string()
        .required("Email is Required"),
    password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Password is Required"),
    month: Yup.string()
        .required("Month is required"),
    day: Yup.string()
        .required("Day is required"),
    year: Yup.string()
        .required("Year is required"),
    gender: Yup.string()
        .required("Gender is required"),
  });

  const pronoun = [
    { value: "She", label: "She: 'We wish her a happy birthday!'"},
    { value: "He", label: "He: 'We wish him a happy birthday!'"},
    { value: "They", label: "They: 'We wish them a happy birthday!'"},
  ];

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  
  const days = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    return {
      value: day.toString().padStart(2, "0"),
      label: day.toString(),
    };
  });
  
  const years = Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year.toString(), label: year.toString() };
  });
  

  const [display, setDisplay] = useState();
      
    const getPosts = () => {
          axios.get(`${api}`).then(function (response) {
            setData(response?.data);
          });
        };
        useEffect(() => {
            getPosts();
          }, []);
          console.log(data)

        const postPosts = (passValue) => {
            console.log("passValue == ", passValue);
            axios
              .post(`${api}`, {
                id	: passValue?.id,
                firstName: passValue?.firstName,
                lastName: passValue?.lastName,
                emailNum: passValue?.emailNum,
                password: passValue?.password,
                month: passValue?.month,
                day: passValue?.day,
                year: passValue?.year,
                gender: passValue?.gender,
                customGender: passValue?.customGender,
                pronoun: passValue?.pronoun,
              })
              .then(function (response) {
                setPostStatus(response?.status);
                // console.log(response);
              });

                // const patchPosts = (passValue) => {
                //   console.log("passValue == ", passValue);
                //   axios
                //     .patch(`${api}/posts/1`, {
                //       id	: passValue?.id,
                //       firstName: passValue?.firstName,
                //       lastName: passValue?.lastName,
                //       emailNum: passValue?.emailNum,
                //       password: passValue?.password,
                //       month: passValue?.month,
                //       day: passValue?.day,
                //       year: passValue?.year,
                //       gender: passValue?.gender,
                //       pronoun: passValue?.pronoun,
                //       customGender: passValue?.customGender,
                //       // body: passValue?.body, --> include one key only for PUT
                //     })
                //     .then(function (response) {
                //       setPatchStatus(response?.status);
                //     });
                // };

                // const deletePosts = (passValue) => {
                //   axios.delete(`${api}/posts/${passValue?.id}`).then(function (response) {
                //     setDeleteStatus(response?.status);
                //   });
                // };
          };
          
          return (
            <div className="screen" style={styles.container}>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  emailNum: "",
                  password: "",
                  month: "",
                  day: "",
                  year: "",
                  gender: "",
                  pronoun: "",
                  customGender: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                  postPosts(values);
                  setDisplay(
                  `Name: ${values.firstName} ${values.lastName} Email/Number: ${values.emailNum} Password: ${values.password} Birthday: ${values.month}/${values.day}/${values.year} \n Gender: ${values.gender } ${values.pronoun} ${values.customGender}`
                    );
                    actions.resetForm({
                      values:{
                        firstName: "",
                        lastName: "",
                        emailNum: "",
                        password: "",
                        month: "",
                        day: "",
                        year: "",
                        gender: "",
                        pronoun: "",
                        customGender: "",
                      },
                    })
                }}        
              >
        {({ errors, touched, values }) => (
            <Form>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "50%" }}>
                <Field style={styles.input} id="firstName" name="firstName" placeholder="First Name" />
                <ErrorMessage style={{ color: "red" }} name="firstName" />
                </div>
                <div style={{ width: "50%" }}>
                    <Field style={styles.input} id="lastName" name="lastName" placeholder="Last Name" />
                <ErrorMessage name="lastName" />
            </div>  
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Field style={styles.input} type="email" id="emailNum" name="emailNum" placeholder="Mobile number or email" />
                <ErrorMessage name="emailNum" />
                <Field style={styles.input} type="password" id="password" name="password" placeholder="New password" />
                <ErrorMessage name="password" /> 

            <label style={styles.label} htmlFor="birthday">Birthday </label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "33.33%" }}>
                    <Field style={styles.option} as="select" name="month" id="month">
                        <option  value="">Select month</option>
                        {months.map((month) => (
                        <option key={month.value} value={month.value}>
                            {month.label}
                        </option>
                        ))}
                    </Field>
                    <ErrorMessage name="month" />
                </div>

            <div style={{ width: "33.33%" }}>
                <Field style={styles.option}  as="select" name="day" id="day">
                    <option value="">Select day</option>
                    {days.map((day) => (
                    <option key={day.value} value={day.value}>
                        {day.label}
                    </option>
                    ))}
                </Field>
                <ErrorMessage name="day" />
            </div>
            <div style={{ width: "33.33%" }}>
            <Field style={styles.option} as="select" name="year" id="year">
                <option   value="">Select year</option>
                {years.map((year) => (
                <option key={year.value} value={year.value}>
                    {year.label}
                </option>
                ))}
            </Field>
            <ErrorMessage name="year" />
            </div>
            </div>

            <label style={styles.label} htmlFor="gender">Gender </label>
            <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "33.33%" }}>
                <label style={styles.radioLabel}  htmlFor="male">
                Male
                <Field style={styles.radio} type="radio" name="gender" id="male" value="male" />
                </label>
            </div>
            
            <div style={{ width: "33.33%" }}>
            <label style={styles.radioLabel} htmlFor="female">
                Female
                <Field type="radio" name="gender" id="female" value="female" />
                </label>
            </div>
            <div style={{ width: "33.33%" }}>
            <label style={styles.radioLabel} htmlFor="custom">
                Custom
                <Field type="radio" name="gender" id="custom" value="custom" />
                </label>
                <ErrorMessage name="gender" />
                </div>
            </div>
        </div>
                {values?.gender == "custom" && (
                <div>
                    <Field style={styles.input} as="select" id="pronoun" name="pronoun" placeholder="Select your pronoun" >
                    <option value="">Select your pronoun</option>
                    {pronoun.map((pronoun) => (
                    <option key={pronoun.value} value={pronoun.value}>
                        {pronoun.label}
                    </option>
                    ))}
                    </Field>
                    <ErrorMessage name="pronoun" />
                    <Field style={styles.input} id="customGender" name="customGender" placeholder="Gender (optional)" />
                    
                </div>
                )}
        </div>

            <p style={styles.p}>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
            <p style={styles.p2}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time</p>
            <button style={styles.signUpButton} type="submit">Sign Up</button>
            <br></br>
            <p style={styles.p}>{display}</p>
            <p>
                Status:{" "}
                {postStatus === 200 ? (
                  <span style={{ color: "green" }}>Success</span>
                ) : postStatus === 500 ? (
                  <span style={{ color: "red" }}>Failed</span>
                ) : (
                  "N/A"
                )}
              </p>
              <p>GET</p>
                {/* {data &&
                  data.splice(0, 10).map((value, key) => {
                    return (
                      // <p>
                      //   {key}: {value?.firstName}
                      // </p>
                    );
                  })} */}
            </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormsFormik;