import "./Content.css"
import Sidebar from "../utils/sidebar/Sidebar";
import TopBar from "../utils/topbar/TopBar";

export default function Content(props) {
    const mainComponent = props.mainComponent;

    return (<div>
            <TopBar/>
            <div className="main">
                <Sidebar/>
                <>{mainComponent}</>
            </div>
        </div>)
}