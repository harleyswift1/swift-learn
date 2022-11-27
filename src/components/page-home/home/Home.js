import "./Home.css";
import home_image from "../../../assets/images/hero_image.png";
import cloud from "../../../assets/images/cloud.png";
import TopBar from "../../utils/topbar/TopBar";
import Button from "../../utils/reusable/Button/Button";

export default function Home() {
    return (<div className={"home-page"}>
        <TopBar/>
        <section className="home-hero">
            <h2>SWIFT LEARN</h2>
            <img src={home_image} className={"home-image"} alt=""/>
            <img src={cloud} className={"cloud cloud-1"} alt=""/>
            <img src={cloud} className={"cloud cloud-2"} alt=""/>
            <h3>Learn PHP just as well as you know English</h3>
            <a href="courses"><Button text={"Explore Courses"} bg={"var(--primary-color)"} color={"var(--white)"}/></a>
        </section>
    </div>)
}