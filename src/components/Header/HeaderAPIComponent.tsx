import React from "react";
import Header from "./Header";
import axios from "axios";
import {usersAPI} from "../../api/api";


class HeaderAPIComponent extends React.Component {
    props: any

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }

}

export default HeaderAPIComponent;