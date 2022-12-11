import book_icon from "../../../../assets/icons/book_icon.png";

export default function LessonWidget(props) {
    return (<a href={props.url} className="lesson-widget">
        <div className="lesson-widget-content">
            <img src={book_icon} alt=""/>
            <strong className={"lesson-widget-header"}>{props.title}</strong>
            <span><p>{props.description}</p></span>
        </div>
        <div className="lesson-widget-button">
            LEARN
        </div>
    </a>)
}