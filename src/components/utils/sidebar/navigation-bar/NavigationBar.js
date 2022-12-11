
export default function NavigationBar() {
    const page = window.location.pathname;
    return (<div className="sidebar_nav">
        <span className={"hide_on_sidebar_closed"}>Menu</span>
        <div className="sidebar_nav_items">
            <NavigationBarItem page={page} href={"/home"} title={"Home"} iconClass={"fas fa-home"}/>
            <NavigationBarItem page={page} href={"/courses"} title={"Courses"} iconClass={"fa-solid fa-lines-leaning"}/>
            <NavigationBarItem page={page} href={"/challenges"} title={"Challenges"} iconClass={"fa-regular fa-lightbulb"}/>
            <NavigationBarItem page={page} href={"/profile"} title={"Profile"} iconClass={"fa-regular fa-user"}/>
            <NavigationBarItem page={page} href={"/settings"} title={"Settings"} iconClass={"fa-solid fa-gear"}/>
        </div>
    </div>);
}

function NavigationBarItem(props) {
    const page = props.page;
    const href = props.href;
    const title = props.title;
    const iconClass = props.iconClass;
    return (<a className={page === href ? "active" : ""} href={href}>
            <div className={"sidebar_nav_link"}><i className={iconClass}></i><span className={"hide_on_sidebar_closed"}>{title}</span></div>
        </a>);
}