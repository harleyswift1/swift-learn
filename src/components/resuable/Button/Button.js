import "./Button.css"

export default function Button(props) {
    const bg = props.bg; // default: var(--white)
    const color = props.color; // default: var(--primary-color)

    const text = props.text; // default: empty
    const icon = props.icon; // * required *, use "{}" to leave empty
    return (<div className="button" style={{backgroundColor: bg, color: color}}>
        <strong>{text}</strong>
        {icon ?  <img src={icon} alt=""/> : null}
    </div>)
}