import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "../src/App.css"
import Home from "./components/home/Home";
import Content from "./components/content/Content";
import IntroductionToPHP from "./components/lessons/1_introduction-to-php/IntroductionToPHP";
import ProfilePage from "./components/profile-page/ProfilePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>

        {/*base routes*/}
        <Route path="/" element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="courses" element={<Home/>}/>
        <Route path="challenges" element={<Home/>}/>
        <Route path="profile" element={<Content mainComponent={<ProfilePage/>}/>}/>

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