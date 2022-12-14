
export default function Tooltip(props) {
    const type = props.type;
    const icon = props.icon;
    const title = props.title;
    const content = props.content;

    return (<div className={"tooltip type-" + type}>
            <div className="tooltip-header">
                <div><i className={icon}></i></div>
                <div><span>{title}</span></div>
            </div>
            <p>{content}</p>
        </div>)
}