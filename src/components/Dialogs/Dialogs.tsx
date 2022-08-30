import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import MessageForm from "./MessageForm/MessageForm";

type DialogsPropsType = {
    dialogsPage: any
    addMessage: ()=>void
    onMessagePostChange : (message:string)=>void
    isAuth : boolean
    sendMessage : (message:string)=>void
}

const Dialogs = (props: DialogsPropsType) => {
    const addMessage=()=>{
       props.addMessage()
    }
    const onMessagePostChange=(event: ChangeEvent<HTMLInputElement>)=>{
        let message = event.currentTarget.value
        props.onMessagePostChange(message)

    }

    const sendMessage = (message:string)=>{
        props.sendMessage(message)
    }


    let dialogsElements = props.dialogsPage.dialogs.map((d:any )=> <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.dialogsPage.messageData.map((m:any )=> <MessageItem id={m.id} message={m.message}/>);

   // if (!props.isAuth)return <Navigate  to ={'/login'}/>
     let AuthRedirectComponent = WithAuthRedirect(Dialogs)

    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
                <MessageForm sendMessage={sendMessage}/>
               {/* <div>
                    <input type="text" onChange={onMessagePostChange} value={props.dialogsPage.messageValue}/>
                    <button onClick={addMessage}>sent message
                    </button>
                </div>*/}
            </div>


        </div>
    )
}

export default Dialogs;