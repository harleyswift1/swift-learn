import "./MainPopup.css";
import {getCookie, setCookie} from "../../../data/cookie_helper";
import {useState} from "react";

export default function MainPopup() {
    const [hidden, setHidden] = useState(getCookie("main_pu_closed", false) || false);

    function handleClick() {
        setCookie("main_pu_closed", true, 7);
        setHidden(oldState => !oldState);
    }

    if (!hidden) {
        return (<div className="main-popup">
            <i onClick={handleClick} className="fa-solid fa-xmark"></i>
            <h4>What is this website?</h4>
            <span>This website is written by me (Harley Swift) for showcase purposes only and is not for public use. <a href="writeup">Read More</a></span>
        </div>)
    }
}