import {useCallback} from "react";
import {courseData} from "../../../data/course_data";
import Category from "./category/Category";
import Button from "../reusable/Button/Button";
import NavigationBar from "./navigation-bar/NavigationBar";
import {Link} from "react-router-dom";

export default function Sidebar(props) {
    const handleToggle = useCallback(() => {
        props.onSidebarToggle()
    }, [props])

    return (<div className={`sidebar ${props.toggled ? 'sidebar_open' : 'sidebar_closed'}`}>
        <div className="sidebar_contents">
            <i onClick={handleToggle} className={"fa-solid fa-circle-arrow-right sidebar_toggle_icon " + (props.toggled ? "rotate180" : "")}></i>
            <Link to="/home">
                <div className={"sidebar_header"}><i className={"fas fa-satellite-dish"}></i> {props.toggled ? <span>Swift Learn</span> : null}</div>
            </Link>
            {props.toggled ? <Button bg={"#2E3134"} color="#FFFFFF" text={"Search"}/> : null}
            <div className="divider" />
            <NavigationBar/>

            {props.toggled ? <div>
                {Object.keys(courseData["course_data"]).map((key) => (<Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>))}
            </div> : <div></div>}
        </div>
    </div>)
}