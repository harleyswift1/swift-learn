import "./TopBar.css"
import ProfileItems from "../profile-items/ProfileItems";

export default function TopBar() {
    return (<header>
        <a href="home">
                <strong className={"logo"}>SWIFT</strong>
        </a>
        <ProfileItems/>
    </header>)
}