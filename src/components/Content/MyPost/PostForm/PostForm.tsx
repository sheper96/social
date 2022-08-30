import React from "react";
import {Form, Formik} from "formik";



const PostForm = (props: any) => {

   let addPost = (postMessage:any)=>{
       props.addPost(postMessage)
   }

    return (<div >
            <h3>My Posts</h3>
            <Formik
                initialValues={{postMessage: ''}}
                onSubmit={(values, {resetForm}) => {
                    addPost(values.postMessage)
                    resetForm(  );
                }}
            >
                {props => (
                    <Form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.postMessage}
                            name="postMessage"
                        />
                        {props.errors.postMessage && <div id="feedback">{props.errors.postMessage}</div>}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default PostForm;