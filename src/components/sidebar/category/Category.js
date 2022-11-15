import "./Category.css"

export default function Category(props) {
    const title = props.title;
    const items = props.items;
    return (<div className="category">
        <span className="category-title">{title}</span>
        <div className={"category-elements"}>
            {items.map((item) => (
                <a href={item.replaceAll(" ", "-").toLowerCase()} key={item} className={"category-subtitle"}>
                    {item}
                </a>
            ))}
        </div>
    </div>)
}