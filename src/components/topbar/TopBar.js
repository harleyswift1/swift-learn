import "./TopBar.css"
import ProfileItems from "../profile-items/ProfileItems";

export default function TopBar() {
    return (<header>
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
    </header>)
}