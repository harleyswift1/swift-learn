import "./ProfileItems.css"
import profile_picture from "../../../../assets/icons/profile-picture.png";

export default function ProfileItems() {
    // function handleClick() {
    //     alert("This feature is coming soon!");
    // }

    return (<div className="profile-items">
        {/*<div onClick={handleClick}><Button color={"var(--go-pro)"} text={"Go Pro"}/></div>*/}
        <div className="trophy-container">
            <i className="fa-solid fa-trophy"></i>
            <span>246</span>
        </div>
        <a href="profile"><img src={profile_picture} alt="profile"/></a>
    </div>)
}