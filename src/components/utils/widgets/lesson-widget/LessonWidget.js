import "./LessonWidget.css";
import external_link_icon from "../../../../assets/icons/external_link_icon.svg";

export default function LessonWidget(props) {
    return (<div className="lesson-widget"><a href={props.url}>

        <div className={"lesson-widget-header"}><strong>{props.title}</strong>
            <div><img src={external_link_icon} alt="Open Lesson"/></div>
        </div>
        <span><p>{props.description}</p></span>

    </a></div>)
}