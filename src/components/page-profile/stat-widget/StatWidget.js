import "./StatWidget.css"

export default function StatWidget(props) {
    const title = props.title;
    const bigStat = props.bigStat;
    const subStat = props.subStat;
    const description = props.description;


    return(<div className="stat-widget">
        <p>{title}</p>
        <p><span className={"big-stat"}>{bigStat}</span>{subStat}</p>
        <p>{description}</p>
    </div>)
}