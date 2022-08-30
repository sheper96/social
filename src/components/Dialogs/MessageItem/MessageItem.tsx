import s from "../Dialogs.module.css";
import React from "react";

type MessageItemPropsType ={
    message : string
    id : number
}

const MessageItem = (props : MessageItemPropsType) =>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default MessageItem;