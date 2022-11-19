import "./ProfileItems.css"
import trophy_icon from "../../assets/icons/trophy-icon.png";
import profile_picture from "../../assets/icons/profile-picture.png";
import Button from "../resuable/Button/Button";
import SearchBar from "../search-bar/SearchBar";

export default function ProfileItems() {
    return (<div className="profile-items">
        <SearchBar/>
        <Button text={"Go Pro"}/>
        <div className="trophy-container">
            <img src={trophy_icon} alt="trophy points"/>
            <span>246</span>
        </div>
        <a href="profile"><img src={profile_picture} alt="profile"/></a>
    </div>)
}