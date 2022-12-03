import "./Contents.css"

export default function Contents(props) {
    const items = props.items;
    const hrefs = props.hrefs;

    function handleClick(item) {
        document.getElementById(item).scrollIntoView({behavior: 'smooth'});
    }


    return (<div className="contents-widget">
        <div className={"contents-widget-header"}>Table of contents</div>

        <div className="contents-widget-items">
            {items.map((item, index) => {
                return (<a tabIndex={0} onClick={() => handleClick(hrefs[index])}>{index + 1}. {item}</a>)
            })}
        </div>
    </div>)
}