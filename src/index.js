import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import "./css/scss/App.scss"
import "./css/keyframes.scss";
import Home from "./components/page-home/Home";
import ProfilePage from "./components/page-profile/ProfilePage";
import CoursesPage from "./components/page-courses/CoursesPage";
import WriteupPage from "./components/page-writeup/WriteupPage";
import AuthPage from "./components/page-auth/AuthPage";
import IntroductionToPHP from "./components/utils/lessons/introduction-to-php/IntroductionToPHP";
import MainPopup from "./components/utils/popup/MainPopup";
import Sidebar from "./components/utils/sidebar/Sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>

        {/*base routes*/}
        <Route path="/" element={<PageWrapper/>}>
            <Route path="*" element={<Home/>}/>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="challenges" element={<Home/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="courses" element={<CoursesPage/>}/>
            <Route path="writeup" element={<WriteupPage/>}/>
            <Route path="register" element={<AuthPage action={"register"}/>}/>
            <Route path="login" element={<AuthPage action={"login"}/>}/>

            {/*lesson routes*/}

            {/*Basics*/}
            <Route path="introduction-to-php" element={<IntroductionToPHP/>}/>
            <Route path="getting-started" element={<IntroductionToPHP/>}/>
            <Route path="how-it-works" element={<IntroductionToPHP/>}/>
            <Route path="syntax" element={<IntroductionToPHP/>}/>
            <Route path="echo-(print)" element={<IntroductionToPHP/>}/>
            <Route path="php-variables" element={<IntroductionToPHP/>}/>
            <Route path="comments-in-php" element={<IntroductionToPHP/>}/>

            {/*Data Types*/}
            <Route path="introduction" element={<IntroductionToPHP/>}/>
            <Route path="string" element={<IntroductionToPHP/>}/>
            <Route path="integer" element={<IntroductionToPHP/>}/>
            <Route path="boolean" element={<IntroductionToPHP/>}/>
            <Route path="float" element={<IntroductionToPHP/>}/>
        </Route>
    </Routes>
</BrowserRouter>);

function PageWrapper() {
    const [opened, setOpen] = useState(window.innerWidth < 1000 ? false : localStorage.getItem('sidebar_opened') !== "false");

    // if the user clicks the open/close button
    function handleToggle() {
        setOpen(oldState => !oldState);
        localStorage.setItem('sidebar_opened', JSON.stringify(!opened));
    }

    //if the user clicks outside the sidebar to close it (mobile only)
    function handleClose() {
        setOpen(false);
        localStorage.setItem('sidebar_opened', JSON.stringify(false));
    }

    return (<div className={"content"}>
        <Sidebar toggled={opened} onSidebarToggle={handleToggle}/>
        <div className="base-page" onTouchEnd={handleClose}><Outlet/></div>
        <MainPopup/>
    </div>)
}