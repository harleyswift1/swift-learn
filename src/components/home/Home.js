import "./Home.css";
import home_image from "../../assets/images/hero_image.png";
import cloud from "../../assets/images/cloud.png";
import scroll_down_icon from "../../assets/icons/scroll_down_icon.png";
import TopBar from "../topbar/TopBar";
import Button from "../resuable/Button/Button";

export default function Home() {
    return (<div className={"home-page"}>
        <TopBar/>
        <section className="home-hero">
            <img src={home_image} className={"home-image"} alt=""/>
            <img src={cloud} className={"cloud cloud-1"} alt=""/>
            <img src={cloud} className={"cloud cloud-2"} alt=""/>
            <h2>Learn PHP just as well as you know English</h2>
            <img className={"home-scroll-down-icon"} src={scroll_down_icon} alt=""/>
            <a href="courses"><Button text={"Explore Courses"} bg={"var(--primary-color)"} color={"var(--white)"}/></a>
        </section>
    </div>)
}