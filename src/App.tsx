import React, {useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileAPIComponent from "./components/Content/ProfileAPIComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, useDispatch} from "react-redux";
import {authThunkCreator} from "./Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId" element={
                                <ProfileAPIComponent  />}/>
                            <Route path="/dialogs" element={
                                <DialogsContainer  />}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state:any)=>({
    initialized : state.app.initialized
})

export default  connect(mapStateToProps, {initializeApp})(App);
