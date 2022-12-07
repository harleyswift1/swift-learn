import "./Content.css"
import Sidebar from "../utils/sidebar/Sidebar";
import {useState} from "react";
import MainPopup from "../utils/popup/MainPopup";

export default function Content(props) {
    const mainComponent = props.mainComponent;

    //if the user is on mobile, close by default, if they are not on mobile, select from localStorage
    const [opened, setOpen] = useState(window.innerWidth < 1000 ? false : localStorage.getItem('sidebar_opened') !== "false");

    // if the user clicks the open/close button
    function handleToggle() {
        setOpen(oldState => !oldState);
        localStorage.setItem('sidebar_opened', JSON.stringify(!opened));
    }

    //if the user clicks outside the sidebar to close it (mobile only)
    function handleClose() {
        setOpen(false);
        localStorage.setItem('sidebar_opened', JSON.stringify(false));
    }

    return (<div className="content">
        <Sidebar page={window.location.pathname} toggled={opened} onSidebarToggle={handleToggle}/>
        <section onTouchEnd={handleClose}>{mainComponent}</section>

        {/*Other components to be rendered*/}
        <MainPopup />
    </div>)
}