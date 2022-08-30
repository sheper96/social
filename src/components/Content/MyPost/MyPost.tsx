import React, {ChangeEvent, useState} from "react";
import Post from "./Posts/Posts";
import s from "./MyPost.module.css"
import PostForm from "./PostForm/PostForm";


type MyPostPropsType = {
    profilePage: any
    dispatch: any
    updateNewPostText: (text:string)=> void
    addPost:()=>void

}



const MyPost = (props: any) => {

   /* const addPost = () => {
        props.addPost()

    }

    const onPostChange = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value;
        props.onPostChange(text)
    }
 */
    const addPost = (text:string) => {

        props.addPostFormik(text)
    }


    let postElement = props.profilePage.posts.map((p:any) => <Post message={p.post} likescount={p.likes}/>)

    return (<div className={s.postsBlock}>
            <h3>My Posts</h3>
           {/* <div>
                <input type="text" onChange={onPostChange} value={props.profilePage.value}/>
                <button onClick={addPost}>Add Post</button>
            </div>*/}
            <div>
                <PostForm addPost={addPost} />
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;