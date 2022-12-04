import "./LessonWidget.css";

export default function LessonWidget(props) {
    return (<div className="lesson-widget"><a href={props.url}>

        <div className={"lesson-widget-header"}><strong>{props.title}</strong>
            <div><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
        </div>
        <span><p>{props.description}</p></span>

    </a></div>)
}