import React from "react";
import {Form, Formik} from "formik";
import * as Yup from 'yup';

const MessageSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});

const MessageForm = (props: any) => {

   let sendMessage = (message:any)=>{
       props.sendMessage(message)
   }

    return (<div >
            <h3>My Posts</h3>
            <Formik
                initialValues={{message: ''}}
                validationSchema={MessageSchema}
                onSubmit={(values, {resetForm}) => {
                    sendMessage(values.message)
                    resetForm(  );
                }}
            >
                {props => (
                    <Form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.message}
                            name="message"
                        />
                        {props.errors.message && props.touched.message ? <div>{props.errors.message}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default MessageForm;