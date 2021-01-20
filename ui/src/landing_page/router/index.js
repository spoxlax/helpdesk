import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import GlobalStyles from '../../globalStyles';
// import Emails from "../../fetch";
// import RightSide from "../components/login/App";

const Router = () => {

    return (

        <React.Fragment>
            <GlobalStyles/>
            {/*<Emails/>*/}
            <Header/>
            <Home/>
            <Footer/>
        </React.Fragment>
    );
};

export default Router;
