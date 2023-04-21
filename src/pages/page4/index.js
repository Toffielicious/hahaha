import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react"
import styles from '@styles/Home.module.css'
import * as Yup from "yup"

const FormsFormik = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(20, "Too Long!")
            .required("First Name is required"),
        lastName: Yup.string()
            .min(2, "Too Short!")
            .max(20, "Too Long!")
            .required("Last Name is required"),
        email: Yup.string()
            .required("Mobile number or email is Required"),
        password: Yup.string()
            .required("Password is Required")
            .min(6, "Too Short!")
            .max(30, "Too Long!"),
        date: Yup.date()
            .required("Birthdate is required"),
        pronouns: Yup.string()
            .required("Select your pronoun.")
    });
    const [display, setDisplay] = useState()
    return (
        <div className={styles.formikContainer}>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Sign Up</h1>
                    <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '14px' }}>It's quick and easy.</p>
                </div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        inputGender: "",
                        date: "",
                        pronouns: "",
                    }}
                    onSubmit={(values, actions) => {
                        setDisplay(`I'm ${values?.firstName} ${values?.lastName}, my email is ${values?.email}. I was born on ${values?.date}. Gender: ${values?.gender}`);
                        actions.resetForm({
                            values: {
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                date: "",
                                gender: "",
                                pronouns: "",
                                inputGender: "",
                            },
                        })
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched, values }) => (
                        <Form style={{ color: "blue" }}>
                            <div className={styles.credentialsContainer}>
                                <div className={styles.nameContainer}>
                                    <Field id="firstName" name="firstName" placeholder="First Name" className={styles.name} />
                                    <ErrorMessage name="firstName" />
                                    <Field id="lastName" name="lastName" placeholder="Last Name" className={styles.name} />
                                    <ErrorMessage name="lastName" />
                                </div>
                                <Field id="email" name="email" placeholder="Mobile number or email" className={styles.emailPass} />
                                <ErrorMessage name="email" />
                                <Field id="password" name="password" placeholder="New password" className={styles.emailPass} />
                                <ErrorMessage name="password" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Birthday</p>
                                <Field id="date" name="date" type="date" className={styles.datePicker} />
                                <ErrorMessage name="date" />
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '5px' }}>Gender</p>
                                <div className={styles.radioButtonsContainer}>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="male">Male</label>
                                        <Field type="radio" id="male" name="gender" value="Male" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="female">Female</label>
                                        <Field type="radio" id="female" name="gender" value="Female" />
                                    </div>
                                    <div className={styles.radioButtons}>
                                        <label htmlFor="custom">Custom</label>
                                        <Field type="radio" id="custom" name="gender" value="Custom" />
                                    </div>
                                </div>
                                {values?.gender == "Custom" && (
                                    <div className={styles.pronounsContainer}>
                                        <Field id="pronouns" name="pronouns" placeholder="Select your pronoun" as="select" className={styles.pronouns}>
                                            <option value="" default>Select your pronoun</option>
                                            <option value="She">She: "Wish her a happy birthday!"</option>
                                            <option value="He">He: "Wish him a happy birthday!"</option>
                                            <option value="They">Them: "Wish them a happy birthday!"</option>
                                        </Field>
                                        {/* <ErrorMessage name="pronouns" /> */}
                                        <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '12px', marginBottom: '10px' }}>Your pronoun is visible to everyone.</p>
                                        <Field id="gender" name="inputGender" placeholder="Gender (Optional)" className={styles.emailPass} />
                                    </div>
                                )}  
                                <p style={{ color: 'grey', fontFamily: 'Arial', fontSize: '11px', marginBottom: '10px' }}>People who use our service may have uploaded your contact information to Facebook. Learn more.<br /><br />By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                                <div className={styles.submitBtnContainer}>
                                    <button type="submit" className={styles.submitButton}>Sign Up</button>
                                </div>
                                <p>{display}</p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default FormsFormik