import "./ProfileItems.css"
import trophy_icon from "../../assets/icons/trophy-icon.png";
import profile_picture from "../../assets/icons/profile-picture.png";
import Button from "../resuable/Button/Button";
import SearchBar from "../search-bar/SearchBar";

export default function ProfileItems() {
    function handleClick() {
        alert("This feature is coming soon!");
    }

    return (<div className="profile-items">
        <SearchBar/>
        <div onClick={handleClick}><Button text={"Go Pro"}/></div>
        <div className="trophy-container">
            <img src={trophy_icon} alt="trophy points"/>
            <span>246</span>
        </div>
        <a href="profile"><img src={profile_picture} alt="profile"/></a>
    </div>)
}