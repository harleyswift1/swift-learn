import "./PHPCode.css"

export default function PHPCode(props) {
    const description = props.description;
    const content = props.content;

    return (<div className={"php-code-widget"}>
        <div className={"php-code-widget-top"}>
            <div className="tooltip-header">
                <div><i className="fa-solid fa-file-code fillprimary"></i></div>
                <div><span>PHP</span></div>
            </div>
            <p>{description}</p>
        </div>
        <div className="php-code">
            <code>
                <pre>{content}</pre>
            </code>
        </div>
    </div>)
}