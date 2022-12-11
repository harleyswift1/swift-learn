
export default function Contents(props) {
    const items = props.items;
    return (<div className="contents-widget">
        <span>Table of contents</span>

        <div className="contents-widget-items">
            {items.map((item, index) => {
                return (<a tabIndex={0} href={"#" + item}>{index + 1}. {item}</a>)
            })}
        </div>
    </div>)
}