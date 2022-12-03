import "./Sidebar.css"
import {useState} from "react";
import {courseData} from "../../../data/course_data";
import Category from "./category/Category";

export default function Sidebar() {
    const [opened, setOpen] = useState(localStorage.getItem('sidebar_opened') === "true");

    function handleClick() {
        setOpen(!opened);
        localStorage.setItem('sidebar_opened', JSON.stringify(!opened));
    }

    return (<div id="sidebar"  className={`sidebar ${opened ? 'sidebar_open' : 'sidebar_closed'}`}>
        <i onClick={handleClick} id="sidebar-icon" className="fa fa-bars" aria-hidden="true"></i>
        {opened ? <div>
            {Object.keys(courseData["course_data"]).map((key) => (<Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>))}
        </div> : <div></div>}
    </div>)
}