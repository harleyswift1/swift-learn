export default function Divider(props) {
    const height = props.height;
    const width = props.width;
    const margin = props.margin;
    return (<div className="divider" style={{"height": height, "width": width, "backgroundColor": "var(--light-text)", "margin": margin + " 0"}}/>)
}