import home_image from "../../assets/images/hero-illustration.svg";
import cloud from "../../assets/images/cloud.png";
import Button from "../utils/reusable/Button/Button";
import {Link} from "react-router-dom";

export default function Home() {
    return (<div className={"home-page"}>
        <img src={cloud} className={"cloud cloud-1"} alt=""/>
        <img src={cloud} className={"cloud cloud-2"} alt=""/>
        <section className="hero-content">
            <div className="hero-text">
                <h1>Learn an <h1 className="highlight">entirely</h1> new language, for free</h1>
                <p>Swift Learn is a <p className="highlight">free</p> and inclusive learning platform where you can learn <p className="highlight">everything</p> about programming
                    languages - from the fundamentals, all the way to advanced concepts
                </p>
                <div className="hero-buttons">
                    <Link to="/register"> <Button text={"Register"} bg={"#2E3134"} color={"#ffffff"}/></Link>
                    <span>or</span>
                    <Link to="/login"> <Button text={"Login"} bg={"#FFFFFF"} color={"#17181B"}/></Link>
                </div>
            </div>
            <div className="hero-image">
                <img src={home_image} alt=""/>
            </div>

        </section>
    </div>)
}