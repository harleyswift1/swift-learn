import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import "../src/App.css"
import GettingStarted from "./components/lessons/1_getting-started/GettingStarted";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App lesson={<GettingStarted/>}/>}>
            <Route index element={<App lesson={<GettingStarted/>}/>}/>

            {/*lessons*/}

            {/*Basics*/}
            <Route path="introduction-to-php" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="getting-started" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="how-it-works" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="syntax" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="echo-(print)" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="php-variables" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="comments-in-php" element={<App lesson={<GettingStarted/>}/>}/>

            {/*Data Types*/}
            <Route path="introduction" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="string" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="integer" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="boolean" element={<App lesson={<GettingStarted/>}/>}/>
            <Route path="float" element={<App lesson={<GettingStarted/>}/>}/>
        </Route>
    </Routes>
</BrowserRouter>);