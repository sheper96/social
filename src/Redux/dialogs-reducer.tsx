const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE_FORMIK = "SEND_MESSAGE_FORMIK";

type messageType = {
    id: number,
    message: string
}


let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"}
    ],
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ],
    messageValue: '',
}

let dialogsReducer = (state = initialState, action: any) => {


    if (action.type === SEND_MESSAGE) {
        return {
            ...state,
            messageValue: "",
            messageData: [...state.messageData, {
                id: 5,
                message: state.messageValue,
            }]
        }

    } else if (action.type === SEND_MESSAGE_FORMIK) {
        return {
            ...state,
            messageValue: "",
            messageData: [...state.messageData, {
                id: 5,
                message: action.messageBody,
            }]
        }

    } else if (action.type === UPDATE_NEW_MESSAGE) {
       return {...state, messageValue: action.newMessage}
    }
    return state;
}


export const addMessageActionCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}
export const addMessageFormikActionCreator = (messageBody:string) => {

    return {
        type: SEND_MESSAGE_FORMIK,
        messageBody:messageBody
    }
}

export const updateNewMessageTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: text
    }
}


export default dialogsReducer;