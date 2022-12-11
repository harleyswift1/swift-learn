
export default function Contents(props) {
    const items = props.items;
    return (<div className="contents-widget">
        <div className={"contents-widget-header"}>Table of contents</div>

        <div className="contents-widget-items">
            {items.map((item, index) => {
                return (<a tabIndex={0} href={"#" + item}>{index + 1}. {item}</a>)
            })}
        </div>
    </div>)
}