import Breadcrumb from "../../../page-lesson/breadcrumb/Breadcrumb";
import Contents from "../../../page-lesson/side-widgets/contents/Contents";
import AdvertWidget from "../../../page-lesson/side-widgets/advert/AdvertWidget";
import PageButtons from "../../reusable/PageButtons/PageButtons";
import Tooltip from "../../widgets/tooltip/Tooltip";

export default function LessonSyntax() {
    const previousPage = "/lesson/how-it-works";
    const nextPage = "/lesson/echo-(print)";

    return (<div className={"lesson-page"}>
        <div>
            <Breadcrumb topic={"Basics"} subtopic={"Syntax"}/>
            <h1>Syntax</h1>
            <h3 id={"What is the PHP syntax?"}>What is the PHP syntax?</h3>
            <p>The PHP syntax is the set of rules and guidelines that dictate how a PHP program should be written.
                It specifies how the various elements of a PHP program, such as variables, functions, and control
                structures, should be represented and organized. </p>
            <p>The PHP syntax is based on the C programming language, so
            it uses many of the same conventions, such as using curly braces to delimit blocks of code
            and using the semi-colon as a statement terminator.</p>
            <Tooltip type={"tip"}
                     icon={"fa-regular fa-lightbulb"}
                     title={"Tip"}
                     content={"In general, the PHP syntax is designed to be easy to read and understand, making it a good language for beginners to learn."}/>

            <PageButtons nextPage={nextPage} previousPage={previousPage}/>
        </div>
        <div className="widgets-container">
            <Contents items={["How is PHP run?", "When writing PHP code", "Congratulations!"]}/>
            <AdvertWidget/>
        </div>
    </div>)
}