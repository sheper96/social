import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileAPIComponent from "./components/Content/ProfileAPIComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props:any) {
    return (
       <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                    <Route path="/profile/:userId" element={<ProfileAPIComponent /*profilePage={props.state.profilePage} dispatch={props.dispatch}*/ /> }/>
                  {/*  <Route path="/profile" element={<Content store={props.store} /> }/>*/}

                    <Route path="/dialogs" element={<DialogsContainer /*state={props.state.dialogsPage} dispatch={props.dispatch}*/ />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
       </BrowserRouter>
    );
}

export default App;
