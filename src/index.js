import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import "./css/scss/App.scss"
import Home from "./components/page-home/Home";
import ProfilePage from "./components/page-profile/ProfilePage";
import CoursesPage from "./components/page-courses/CoursesPage";
import WriteupPage from "./components/page-writeup/WriteupPage";
import AuthPage from "./components/page-auth/AuthPage";
import LessonIntroductionToPHP from "./components/utils/lessons/introduction-to-php/LessonIntroductionToPHP";
import MainPopup from "./components/utils/popup/MainPopup";
import Sidebar from "./components/utils/sidebar/Sidebar";
import LessonHowItWorks from "./components/utils/lessons/how-it-works/LessonHowItWorks";
import LessonSyntax from "./components/utils/lessons/syntax/LessonSyntax";

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

            <Route path="lesson/introduction-to-php" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/how-it-works" element={<LessonHowItWorks/>}/>
            <Route path="lesson/syntax" element={<LessonSyntax/>}/>
            <Route path="lesson/echo-(print)" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/php-variables" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/comments-in-php" element={<LessonIntroductionToPHP/>}/>

            {/*Data Types*/}
            <Route path="lesson/introduction" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/string" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/integer" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/boolean" element={<LessonIntroductionToPHP/>}/>
            <Route path="lesson/float" element={<LessonIntroductionToPHP/>}/>
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