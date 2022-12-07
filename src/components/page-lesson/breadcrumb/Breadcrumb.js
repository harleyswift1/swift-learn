import "./Breadcrumb.css"

export default function Breadcrumb(props) {
    const topic = props.topic;
    const subtopic = props.subtopic;
    return (<div className="breadcrumbs">
        <span><a href="/courses"> {topic}</a></span>
        <span className={"breadcrumbs-subtopic"}>></span>
        <span className={"breadcrumbs-subtopic"}>{subtopic}</span>
    </div>)
}