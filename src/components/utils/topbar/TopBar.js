import "./TopBar.css"
import ProfileItems from "./profile-items/ProfileItems";
import {useState} from "react";
import menu_icon from "../../../assets/icons/menu_icon.svg";

export default function TopBar() {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        if (expanded) {
            document.getElementById("expanded").classList.add("hidden");
            setExpanded(false);
        } else {
            document.getElementById("expanded").classList.remove("hidden");
            setExpanded(true);
        }
    }

    return (<>
        {/*collapsed*/}
        <nav className={"mobile-view"}>
            <div className={"titlebar-header"}>
                <a href="home">
                    <strong className={"logo"}>SWIFT</strong>
                </a>
            </div>
            <div onClick={handleClick}><img src={menu_icon} alt=""/></div>
        </nav>

        {/*expanded*/}
        <nav className={"expanded-content expanded hidden"} id={"expanded"}>
            <ul className={"nav-items"}>
                <li><a href="home">Home</a></li>
                <li><a href="courses">Courses</a></li>
                <li><a href="challenges">Challenges</a></li>
            </ul>
            <ProfileItems/>
        </nav>

        {/*desktop*/}
        <nav className={"desktop-view"}>
            <div className={"titlebar-header"}>
                <a href="home">
                    <strong className={"logo"}>SWIFT</strong>
                </a>
                <ul className={"nav-items"}>
                    <li><a href="home">Home</a></li>
                    <li><a href="courses">Courses</a></li>
                    <li><a href="challenges">Challenges</a></li>
                </ul>
            </div>
            <ProfileItems/>
        </nav>
    </>)

}