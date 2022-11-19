import "./Content.css"
import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";

export default function Content(props) {
    const mainComponent = props.mainComponent;

    return (<div className={"content"}>
        <Sidebar/>
        <div className="main">
            <TopBar/>
            <>{mainComponent}</>
        </div>
    </div>)
}