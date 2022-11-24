import Breadcrumb from "../../breadcrumb/Breadcrumb";
import Tooltip from "../../widgets/tooltip/Tooltip";
import Button from "../../resuable/Button/Button";
import tip_icon from "../../../assets/icons/tip-icon.svg"
import PHPCode from "../../widgets/php/PHPCode";
import Contents from "../../side-widgets/contents/Contents";
import AdvertWidget from "../../side-widgets/advert/AdvertWidget";

export default function IntroductionToPHP() {
    //const previousPage = ""; // first page (delete)
    const nextPage = "getting-started";

    return (<div className={"main-component"}>
        <div>
            <Breadcrumb topic={"Basics"} subtopic={"Introduction to PHP"}/>
            <h1>PHP Variables</h1>
            <h3 id={"header-1"}>Introduction</h3>
            <p>PHP is a general-purpose scripting for the scripting of web developments.
                It was originally produced in 1994 by Rasmus Lerdorf, a Danish Canadian
                programmer. The PHP Group is now producing the PHP reference implementation.
                PHP used to stand for Personal Home Page, now it stands for Hypertext
                Preprocessor</p>
            <Tooltip type={"tip"} icon={tip_icon} title={"Tip"} content={"PHP is similar to JavaScript, although instead of running on the client-side, it runs on server-side"}/>
            <p>Similar to other programming languages such as Java, JavaScript and C#, PHP is an
                object-orientated programming language. This means that the structure of PHP is
                based on the four pillars (Abstraction, Encapsulation, Inheritance and Polymorphism). </p>
            <p>The best part about using PHP is that it is extremely simple for a newcomer, but offers many
                advanced features for a professional programmer. Don't be afraid to read the long list of PHP's
                features. You can jump in, in a short time, and start writing simple scripts in a few hours.</p>
            <h3 id={"header-2"}>How is PHP written?</h3>
            <p>Just like other programming languages, PHP has a strict(ish) syntax that you must follow when
                writing it's code. Most programming IDEs such as WebStorm, VSCode or Sublime Text can be used to write PHP code.</p>
            <p>You can write PHP by creating a file ending in .php, or opening PHP tags inside a PHP file.</p>
            <PHPCode description="This is how you write Hello World in PHP" content={"<?php \n  echo 'Hello World!'; \n?>"}/>
            <h3 id={"header-3"}>Congratulations!</h3>
            <p>You have completed your first PHP lesson! There's plenty more, so click the "Next Page" button to go to the next lesson.</p>
            <br/>
            <div className="page-buttons">
                {/*<a aria-disabled={true} href={previousPage}>*/}
                {/*    <Button text={"Previous Page"} icon={null} bg={"var(--superlight-gray)"} color={"var(--black)"}/>*/}
                {/*</a>*/}
                <div />
                <a href={nextPage}>
                    <Button text={"Next Page"} icon={null} bg={"var(--primary-color)"} color={"var(--white)"}/>
                </a>
            </div>
        </div>
        <div className={"widgets"}>
            <Contents items={["Introduction", "How is PHP written?", "Congratulations!"]} hrefs={["header-1", "header-2", "header-3"]} />
            <AdvertWidget />
        </div>
    </div>)
}