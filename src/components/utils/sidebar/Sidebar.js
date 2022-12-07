import "./Sidebar.css"
import {useCallback} from "react";
import {courseData} from "../../../data/course_data";
import Category from "./category/Category";
import profile_picture from "../../../assets/icons/profile-picture.png";

export default function Sidebar(props) {
    const handleToggle = useCallback(() => {
        props.onSidebarToggle()
    }, [props])

    return (<div className={`sidebar ${props.toggled ? 'sidebar_open' : 'sidebar_closed'}`}>
        <i onClick={handleToggle} className={`toggle-icon fa-solid fa-angles-${props.toggled ? 'left' : 'right'}`}></i>
        <div className="sidebar-contents-closed">
            <div><a className={props.page === "/home" ? "active" : ""} href="/home"><i className="fas fa-home"></i></a></div>
            <div><a className={props.page === "/courses" ? "active" : ""} href="/courses"><i className="fa-solid fa-lines-leaning"></i></a></div>
            <div><a className={props.page === "/challenges" ? "active" : ""} href="/challenges"><i className="fa-regular fa-lightbulb"></i></a></div>
        </div>
        <div className="sidebar-contents-open">
            <div className={"sidebar-header"}>
                <a className={"logo"} href="/home">
                    <strong>SWIFT</strong>
                </a>
                <div className="trophy-container">
                    <i className="fa-solid fa-trophy"></i>
                    <span>246</span>
                </div>
                <a href="/profile"><img src={profile_picture} alt="profile"/></a>
            </div>

            <nav>
                <ul className={"nav-items"}>
                    <li><a className={props.page === "/home" ? "active" : ""} href="/home"><i className="fas fa-home"></i>Home</a></li>
                    <li><a className={props.page === "/courses" ? "active" : ""} href="/courses"><i className="fa-solid fa-lines-leaning"></i> Courses</a></li>
                    <li><a className={props.page === "/challenges" ? "active" : ""} href="/challenges"><i className="fa-regular fa-lightbulb"></i> Challenges</a></li>
                </ul>
            </nav>


            {props.toggled ? <div>
                {Object.keys(courseData["course_data"]).map((key) => (<Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>))}
            </div> : <div></div>}
        </div>
    </div>)
}