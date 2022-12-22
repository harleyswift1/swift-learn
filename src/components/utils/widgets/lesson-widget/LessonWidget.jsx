import book_icon from "../../../../assets/icons/book_icon.png";
import {Link} from "react-router-dom";

export default function LessonWidget(props) {
    return (<Link to={"/lesson/" + props.url} className="lesson-widget">
        <div className="lesson-widget-content">
            <img src={book_icon} alt=""/>
            <strong>{props.title}</strong>
           <p>{props.description}</p>
        </div>
    </Link>)
}