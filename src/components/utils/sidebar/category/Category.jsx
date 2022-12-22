import {Link, NavLink} from "react-router-dom";

export default function Category(props) {
    const title = props.title;
    const items = props.items;
    return (<div className="category">
        <Link to="/courses"><span className="category-title">{title}</span></Link>
        {items.map((item) => (<NavLink className={((navData) => navData.isActive ? "active" : "") + " category-subtitle"}
                                 to={"/lesson/" + item.replaceAll(" ", "-").toLowerCase()}
                                 key={item}>
            {item}
        </NavLink>))}
    </div>)
}