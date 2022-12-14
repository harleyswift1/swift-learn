import Breadcrumb from "../../../page-lesson/breadcrumb/Breadcrumb";
import Tooltip from "../../widgets/tooltip/Tooltip";
import Contents from "../../../page-lesson/side-widgets/contents/Contents";
import AdvertWidget from "../../../page-lesson/side-widgets/advert/AdvertWidget";
import PageButtons from "../../reusable/PageButtons/PageButtons";

export default function LessonGettingStarted() {
    const nextPage = "/lesson/how-it-works";

    return (<div className={"lesson-page"}>
        <main>
            <Breadcrumb topic={"Basics"} subtopic={"Introduction to PHP"}/>
            <h1>Introduction to PHP</h1>
            <h3 id={"What is PHP?"}>What is PHP?</h3>
            <p>PHP is a general-purpose scripting for the scripting of web developments.
                It was originally produced in 1994 by Rasmus Lerdorf, a Danish Canadian
                programmer. The PHP Group is now producing the PHP reference implementation.
                PHP used to stand for Personal Home Page, now it stands for Hypertext
                Preprocessor</p>
            <Tooltip type={"tip"}
                     icon={"fa-regular fa-lightbulb"}
                     title={"Tip"}
                     content={"PHP is similar to JavaScript, although instead of running on the client-side, it runs on server-side"}/>
            <p>Similar to other programming languages such as Java, JavaScript and C#, PHP is an
                object-orientated programming language. This means that the structure of PHP is
                based on the four pillars (Abstraction, Encapsulation, Inheritance and Polymorphism). </p>
            <p>The best part about using PHP is that it is extremely simple for a newcomer, but offers many
                advanced features for a professional programmer. Don't be afraid to read the long list of PHP's
                features. You can jump in, in a short time, and start writing simple scripts in a few hours.</p>
            <h3 id={"How is PHP written?"}>How is PHP written?</h3>
            <p>Just like other programming languages, PHP has a strict(ish) syntax that you must follow when
                writing it's code. Most programming IDEs such as WebStorm, VSCode or Sublime Text can be used to write PHP code.</p>
            <p>You can write PHP by creating a file ending in .php, or opening PHP tags inside a PHP file.</p>
            <Tooltip type={"tip"}
                     icon={"fa-regular fa-lightbulb"}
                     title={"Tip"}
                     content={"PHP is an industry standard in full-stack Web Development. So if you want to become a Web Developer, it's crucial that you learn PHP."}/>
            <h3 id={"Congratulations!"}>Congratulations!</h3>
            <p>You have completed your first PHP lesson! There's plenty more, so click the "Next Page" button to go to the next lesson.</p>
            <br/>
           <PageButtons nextPage={nextPage}/>
        </main>
        <div className="widgets-container">
            <Contents items={["What is PHP?", "How is PHP written?", "Congratulations!"]}/>
            <AdvertWidget/>
        </div>
    </div>)
}