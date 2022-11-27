import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "../src/App.css"
import Home from "./components/page-home/home/Home";
import Content from "./components/content/Content";
import ProfilePage from "./components/page-profile/ProfilePage";
import IntroductionToPHP from "./components/utils/lessons/introduction-to-php/IntroductionToPHP";
import CoursesPage from "./components/page-courses/courses-page/CoursesPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>

        {/*base routes*/}
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="challenges" element={<Home/>}/>
        <Route path="profile" element={<Content mainComponent={<ProfilePage/>}/>}/>
        <Route path="courses" element={<Content mainComponent={<CoursesPage/>}/>}/>

        {/*lesson routes*/}

        {/*Basics*/}
        <Route path="introduction-to-php" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="getting-started" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="how-it-works" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="syntax" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="echo-(print)" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="php-variables" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="comments-in-php" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>

        {/*Data Types*/}
        <Route path="introduction" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="string" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="integer" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="boolean" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
        <Route path="float" element={<Content mainComponent={<IntroductionToPHP/>}/>}/>
    </Routes>
</BrowserRouter>);