import "./Home.css";
import home_image from "../../assets/images/hero_image.png";
import cloud from "../../assets/images/cloud.png";
import scroll_down_icon from "../../assets/icons/scroll_down_icon.png";

export default function Home() {
    return (<div className={"home"}>
        <section className="home-hero">
            <img src={home_image} className={"home-image"} alt=""/>
            <img src={cloud} className={"cloud cloud-1"} alt=""/>
            <img src={cloud} className={"cloud cloud-2"} alt=""/>
            <h2>Learn PHP just as well as you know English</h2>
            <h3>explore our courses...</h3>
            <img className={"home-scroll-down-icon"} src={scroll_down_icon} alt=""/>
        </section>

        <main className="lesson-section">
            <h1>Select your course</h1>
            <div className="lesson-widgets-category">
                <div><h3>Basics</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget">
                        <h4>Introduction to PHP</h4>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum.</p></div>
                    </div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Data types</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Advanced data types</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Logic</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Loops</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Miscellaneous</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Forms</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Advanced PHP</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>

                <div><h3>Challenges</h3></div>
                <div className="lesson-widgets-container">
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                    <div className="lesson-widget"></div>
                </div>
            </div>
        </main>
    </div>)
}