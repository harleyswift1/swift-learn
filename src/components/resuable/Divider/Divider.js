export default function Divider(props) {
    const height = props.height;
    const width = props.width;
    const color = props.color;
    const margin = props.margin;
    return (<div className="divider" style={{"height": height, "width": width, "backgroundColor": color, "margin": margin + " 0"}}/>)
}