import "./Sidebar.css"
import Category from "./category/Category";
import {courseData} from "../../data/course_data";

export default function Sidebar() {
    return (<div className="sidebar">
        <div className="sidebar-header"><span>CONTENTS</span></div>
        <div className="sidebar-contents">
            {Object.keys(courseData["course_data"]).map((key) => (
                <Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>
            ))}
        </div>
    </div>)
}