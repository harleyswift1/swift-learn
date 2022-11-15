import Breadcrumb from "../../breadcrumb/Breadcrumb";
import Tooltip from "../../widgets/tooltip/Tooltip";
import Button from "../../resuable/Button/Button";
import tip_icon from "../../../assets/icons/tip-icon.png";

export default function GettingStarted() {
    return (<div className={"lesson-content"}>
        <Breadcrumb topic={"Topic"} subtopic={"Subtopic"}/>
        <h1>PHP Variables</h1>
        <h3>Introduction</h3>
        <p>PHP is a general-purpose scripting for the scripting of web developments.
            It was originally produced in 1994 by Rasmus Lerdorf, a Danish Canadian
            programmer. The PHP Group is now producing the PHP reference implementation.
            PHP used to stand for Personal Home Page, now it stands for Hypertext
            Preprocessor</p>
        <Tooltip type={"tip"} icon={tip_icon} title={"Tip"} content={"PHP is similar to JavaScript, although instead of running on the client-side, it runs on server-side"}/>
        <div className="page-buttons">
            <Button text={"Previous Page"} icon={null} bg={"var(--superlight-gray)"} color={"var(--black)"}/>
            <Button text={"Next Page"} icon={null} bg={"var(--primary-color)"} color={"var(--white)"}/>
        </div>
    </div>)
}