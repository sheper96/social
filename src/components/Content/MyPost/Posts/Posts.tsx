import React from "react";


type PostPropsType = {
    message : string
    likescount:number
}

const Post = (props:PostPropsType)=>{
    return (<div >
            {props.message}
            {props.likescount}
        </div>
    )
}

export default Post;