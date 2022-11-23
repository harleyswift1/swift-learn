import "./Contents.css"
import Divider from "../../resuable/Divider/Divider";

export default function Contents(props) {
    const items = props.items;
    return (<div className="contents-widget">
        <div className={"contents-widget-header"}>Table of contents</div>
        <Divider height={"1px"} width={"80%"} color={"#cccccc"}/>

        <div className="contents-widget-items">
            {items.map((item, index)=>{
                return (
                    <span>{index + 1}. {item}</span>
                )
            })}
        </div>
    </div>)
}