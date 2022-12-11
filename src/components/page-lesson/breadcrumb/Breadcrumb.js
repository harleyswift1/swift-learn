import {Link} from "react-router-dom";

export default function Breadcrumb(props) {
    const topic = props.topic;
    const subtopic = props.subtopic;
    return (<div className="breadcrumbs">
        <span><Link to="/courses"> {topic}</Link></span>
        <span className={"breadcrumbs-subtopic"}>></span>
        <span className={"breadcrumbs-subtopic"}>{subtopic}</span>
    </div>)
}