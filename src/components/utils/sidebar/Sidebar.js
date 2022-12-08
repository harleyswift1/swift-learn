import "./Sidebar.css"
import {useCallback} from "react";
import {courseData} from "../../../data/course_data";
import Category from "./category/Category";
import Button from "../reusable/Button/Button";
import NavigationBar from "./navigation-bar/NavigationBar";

export default function Sidebar(props) {
    const handleToggle = useCallback(() => {
        props.onSidebarToggle()
    }, [props])

    return (<div className={`sidebar ${props.toggled ? 'sidebar_open' : 'sidebar_closed'}`}>
        <div className="sidebar_contents">
            <i onClick={handleToggle} className={"fa-solid fa-circle-arrow-right sidebar_toggle_icon " + (props.toggled ? "rotate180" : "")}></i>
            <a href="/home">
                <div className={"sidebar_header"}><i className={"fas fa-satellite-dish"}></i> {props.toggled ? <span>Swift Learn</span> : null}</div>
            </a>
            {props.toggled ? <Button bg={"var(--dark-grey)"} color="var(--white)" text={"Search"}/> : null}
            <div className="divider" />
            <NavigationBar/>

            {props.toggled ? <div>
                {Object.keys(courseData["course_data"]).map((key) => (<Category key={key} title={courseData["course_data"][key]["title"]} items={courseData["course_data"][key]["subcategories"]}/>))}
            </div> : <div></div>}
        </div>
    </div>)
}