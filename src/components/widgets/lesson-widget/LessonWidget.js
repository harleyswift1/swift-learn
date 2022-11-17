import "./LessonWidget.css";
import external_link_icon from "../../../assets/icons/external_link_icon.svg";

export default function LessonWidget(props) {
    return (<a href={props.url}>
            <div className="lesson-widget">
                <span><strong>{props.title}</strong></span>
                <span><p>{props.description}</p></span>
                <div><img src={external_link_icon} alt="externeal link"/></div>
            </div>
        </a>)
}