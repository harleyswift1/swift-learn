import {Link} from "react-router-dom";
import Button from "../Button/Button";

export default function PageButtons(props) {
    return(
        <div className="page-buttons">
            <Link to={props.previousPage}>
                {props.previousPage != null ? <Button text={"Previous Page"} icon={null} bg={"#ffffff"} color={"#0E1013"}/> : <></>}
            </Link>
            <div/>
            <Link to={props.nextPage}>
                <Button text={"Next Page"} icon={null} bg={"#7F92FF"} color={"#0E1013"}/>
            </Link>
        </div>
    )
}