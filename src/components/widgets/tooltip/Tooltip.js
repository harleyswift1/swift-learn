import "./Tooltip.css"

export default function Tooltip(props) {
    const type = props.type;
    const icon = props.icon;
    const title = props.title;
    const content = props.content;

    return(<div className={"tooltip type-" + type}  >
            <div className="tooltip-header">
                <div><img src={icon} alt=""/></div>
                <div><span className={"type-" + type + " no-border"}>{title}</span></div>
            </div>
            <p>{content}</p>
        </div>
    )
}