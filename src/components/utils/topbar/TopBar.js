import "./TopBar.css"
import ProfileItems from "./profile-items/ProfileItems";
import {useState} from "react";

export default function TopBar() {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
       setExpanded(!expanded);
    }

    return (<>
        {/*collapsed*/}
        <nav className={"mobile-view"}>
            <div className={"titlebar-header"}>
                <a href="home">
                    <strong className={"logo"}>SWIFT</strong>
                </a>
            </div>
            <div onClick={handleClick}><i className="fa-solid fa-bars"></i></div>
        </nav>

        {/*expanded*/}
        <nav className={`expanded-content expanded ${!expanded ? 'hidden' : ''}`} id={"expanded"}>
            <ProfileItems/>
            <ul className={"nav-items"}>
                <li><a href="home">Home</a></li>
                <li><a href="courses">Courses</a></li>
                <li><a href="challenges">Challenges</a></li>
            </ul>

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