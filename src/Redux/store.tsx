import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

/*
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
    getState: () => void
    dispatch: any
}
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "hello", likes: 12},
                {id: 2, post: "im doing good", likes: 2}
            ],
            value: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        debugger
        console.log("state changed")
    },
    addPost() {
        debugger
        const newPost: postsType = {
            id: 5,
            post: this._state.profilePage.value,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.value = ""
        store._callSubscriber()

    },
    updateNewPostText(newText: string) {
        debugger
        this._state.profilePage.value = newText
        this._callSubscriber()
    },
    subscribe(observer: any) {

        this._callSubscriber = observer
    },
    dispatch(action: object) {


        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}


export type dialogsDataType = {
    id: number
    name: string
}


export type messagesType = {
    id: number
    message: string
}

export type postsType = {
    id: number
    post: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<postsType>
    value: string
}

export type DialogPageType = {
    dialogs: Array<dialogsDataType>
    messageData: Array<messagesType>
    messageValue: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}


export default store;

window.store = store;*/
