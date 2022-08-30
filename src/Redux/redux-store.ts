import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage :profileReducer,
    dialogsPage :dialogsReducer,
    userssPage :userReducer,
    auth:authReducer,
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store

export default store;