import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    return (<div className="sidebar_nav">
        <span className={"hide_on_sidebar_closed"}>Menu</span>
        <div className="sidebar_nav_items">
            <NavigationBarItem href={"/home"} title={"Home"} iconClass={"fas fa-home"}/>
            <NavigationBarItem href={"/courses"} title={"Courses"} iconClass={"fa-solid fa-lines-leaning"}/>
            <NavigationBarItem href={"/challenges"} title={"Challenges"} iconClass={"fa-regular fa-lightbulb"}/>
            <NavigationBarItem href={"/profile"} title={"Profile"} iconClass={"fa-regular fa-user"}/>
            <NavigationBarItem href={"/settings"} title={"Settings"} iconClass={"fa-solid fa-gear"}/>
        </div>
    </div>);
}

function NavigationBarItem(props) {
    const href = props.href;
    const title = props.title;
    const iconClass = props.iconClass;
    return (<NavLink className={(navData) => navData.isActive ? "sidebar-active" : "" } to={href}>
            <div className={"sidebar_nav_link"}><i className={iconClass}></i><span className={"hide_on_sidebar_closed"}>{title}</span></div>
        </NavLink>);
}