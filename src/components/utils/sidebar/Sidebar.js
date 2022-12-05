import "./Sidebar.css"
import {useCallback} from "react";
import {courseData} from "../../../data/course_data";
import Category from "./category/Category";
import profile_picture from "../../../assets/icons/profile-picture.png";

export default function Sidebar(props) {
    const handleToggle = useCallback(() => {
        props.onSidebarToggle()
    }, [props.toggled])

    return (<div className={`sidebar ${props.toggled ? 'sidebar_open' : 'sidebar_closed'}`}>
        <i onClick={handleToggle} className={`toggle-icon fa-solid fa-angles-${props.toggled ? 'left' : 'right'}`}></i>
        <div className="sidebar-contents">
            <div className={"sidebar-header"}>
                <a href="home">
                    <strong>SWIFT</strong>
                </a>
            </div>

            <ul className={"nav-items"}>
                <li><a href="home"><i className="fas fa-home"></i>Home</a></li>
                <li><a href="courses"><i className="fa-solid fa-lines-leaning"></i> Courses</a></li>
                <li><a href="challenges"><i className="fa-regular fa-lightbulb"></i> Challenges</a></li>
            </ul>

            {/*<div className="trophy-container">*/}
            {/*    <i className="fa-solid fa-trophy"></i>*/}
            {/*    <span>246</span>*/}
            {/*</div>*/}
            {/*<a href="profile"><img src={profile_picture} alt="profile"/></a>*/}

            {props.toggled ? <div>
                {Object.keys(courseData["course_data"]).map((key) => (<Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>))}
            </div> : <div></div>}
        </div>
    </div>)
}