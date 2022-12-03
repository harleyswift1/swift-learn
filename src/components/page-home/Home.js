import "./Home.css";
import home_image from "../../assets/images/hero-illustration.svg";
import cloud from "../../assets/images/cloud.png";
import Button from "../utils/reusable/Button/Button";

export default function Home() {
    return (
        <div className={"home-page"}>
        <img src={cloud} className={"cloud cloud-1"} alt=""/>
        <img src={cloud} className={"cloud cloud-2"} alt=""/>
        <section className="home-hero">
            <div className="hero-content">
                <h1>Learn an <h1 className="highlight">entirely</h1> new language, for free</h1>
                <p>Swift Learn is a <p className="highlight">free</p> and inclusive learning platform where you can learn <p className="highlight">everything</p> about programming
                    languages - from the fundamentals, all the way to advanced concepts
                </p>
                <div className="hero-buttons">
                    <Button text={"Register"} bg={"var(--dark-grey)"} color={"var(--white)"}/>
                    <span>or</span>
                    <Button text={"Login"} bg={"var(--white)"} color={"var(--off-black)"}/>
                </div>
            </div>
            <div className="hero-image">
                <img src={home_image} className={"home-image"} alt=""/>
            </div>

        </section>
    </div>)
}