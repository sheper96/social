import React, {FormEvent} from 'react';
import {Field, Form, Formik } from 'formik';
import {connect} from "react-redux";
import {setLoginAC} from "../../Redux/profile-reducer";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props:any) => {

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{login: 'ssss', password: 'password' , toggle:false}}
                onSubmit={(values,  { setSubmitting, setStatus }) => {
                    props.login(values.login , values.password , values.toggle, setStatus)
                    setSubmitting(false);
                }}
            >
                {props => (
                    <Form onSubmit={props.handleSubmit}>

                        <input
                            type="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.login}
                            name="login"
                        />
                        <input
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                        />
                        <div>
                            {props.status}
                            </div>
                        <label>
                            <Field type="checkbox" name="toggle" />

                        </label>
                        {props.errors.login && <div id="feedback">{props.errors.login}</div>}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>)
};


const mapStateToProps = (state:any) =>({
    isAuth : state.auth.isAuth
})

const mapDispatchToProps = (dispatch:any) => {
    return {
        setLogin: (login: string) => {
            dispatch(setLoginAC(login))
        },
        login : (email:string,password:string,rememberMe:boolean,setStatus:any) =>{
            debugger
            dispatch(loginThunkCreator(email,password,rememberMe,setStatus))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);























/*
import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};

    },

    handleSubmit: (values, formikBag) => {
        // do submitting things
      formikBag.setSubmitting(false)
    },
})(InnerForm);

// Use <MyForm /> wherevs
const Login = () => (
    <div>
        <MyForm message="Sign up" />
    </div>
);

export default Login;*/

