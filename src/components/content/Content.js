import "./Content.css"
import TopBar from "../topbar/TopBar";
import Sidebar from "../sidebar/Sidebar";
import LessonContent from "../lesson-content/LessonContent";

export default function Content(props) {
    const lesson = props.lesson;
    return (<div className={"content"}>
        <TopBar/>
        <div className="main">
            <Sidebar/>
            <LessonContent lesson={lesson}/>
        </div>
    </div>)
}