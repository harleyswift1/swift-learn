import "./Category.css"

export default function Category(props) {
    const title = props.title;
    const items = props.items;
    const pathName = window.location.pathname.replaceAll("/", "");
    return (<div className="category">
        <span className="category-title">{title}</span>
        <div className={"category-elements"}>
            {items.map((item) => (<a className={(item.replaceAll(" ", "-").toLowerCase() === pathName ? "active" : "") + " category-subtitle"}
                                     href={item.replaceAll(" ", "-").toLowerCase()}
                                     key={item}>
                    {item}
                </a>))}
        </div>
    </div>)
}