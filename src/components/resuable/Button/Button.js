import "./Button.css"

export default function Button(props) {
    const bg = props.bg; // default: var(--white)
    const color = props.color; // default: var(--pro-primary)

    const text = props.text; // default: empty
    const icon = props.icon; // * required *, use "{}" to leave empty
    return (<div className="button" style={{backgroundColor: bg, color: color}}>
        <strong>{text}</strong>
        <img src={icon} alt=""/>
    </div>)
}