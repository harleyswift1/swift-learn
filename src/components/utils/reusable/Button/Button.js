
export default function Button(props) {
    const bg = props.bg; // default: $white
    const color = props.color; // default: $primary-color
    const text = props.text; // default: empty
    const icon = props.icon; // * required *, use "{}" to leave empty
    return (<button type={1 ? "submit" : null} className="button" style={{backgroundColor: bg, color: color}}>
        <strong>{text}</strong>
        {icon ? <img src={icon} alt=""/> : ""}
    </button>)
}