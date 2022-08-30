import React, {ChangeEvent} from "react";
import {
    addMessageActionCreator,
    addMessageFormikActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


/*type DialogsContainerPropsType = {
    state: DialogPageType
    dispatch: any
}*/
/*
const sssDialogsContainer = (props: DialogsContainerPropsType) => {

    const addMessagePost = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessagePostChange = (message: string) => {

        props.dispatch(updateNewMessageTextActionCreator(message))

    }


    return (<Dialogs addMessage={addMessagePost} onMessagePostChange={onMessagePostChange} state={props.state}
                     dispatch={props.dispatch}/>
    )
}*/

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessagePostChange: (message:string) => {
            dispatch(updateNewMessageTextActionCreator(message))
        } ,
        sendMessage: (message:string) => {
            dispatch(addMessageFormikActionCreator(message))
        }
}
}



/*
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(WithAuthRedirect(Dialogs))
*/

let DialogsContainer = compose(connect(mapStateToProps,mapDispatchToProps),WithAuthRedirect)(Dialogs)

export default DialogsContainer;