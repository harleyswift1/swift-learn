import Breadcrumb from "../../../page-lesson/breadcrumb/Breadcrumb";
import Contents from "../../../page-lesson/side-widgets/contents/Contents";
import AdvertWidget from "../../../page-lesson/side-widgets/advert/AdvertWidget";
import PageButtons from "../../reusable/PageButtons/PageButtons";
import Tooltip from "../../widgets/tooltip/Tooltip";
import PHPCode from "../../widgets/php/PHPCode";

export default function LessonSyntax() {
    const previousPage = "/lesson/how-it-works";
    const nextPage = "/lesson/echo-(print)";

    return (<div className={"lesson-page"}>
        <main>
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
            <h3 id={"Important syntax rules"}>Important syntax rules</h3>
            <p>Some of the most important and common syntax rules for PHP are the following:</p>
            <ol>
                <li>Statements must end in a semi-colon ";"</li>
                <li>Curly braces specify start and end blocks of code</li>
                <li>Variable and function names are case sensitive</li>
                <li>Variable and function names must not contain special characters or spaces</li>
            </ol>
            <PHPCode description="Here are some examples of valid and invalid PHP code" content={"$var foo = 5;              //valid \n$var my variable = 5;      //invalid \n$var number = 5            //invalid \n$var v@r!abl3 = 5;         //invalid \n"}/>
            <p>After a while, you will soon become super familiar with the PHP syntax, and it will
                become second nature. In the meantime, make sure you're adding your semi-colons
                on the end of your statements to save you 3 hours of debugging time!</p>


            <PageButtons nextPage={nextPage} previousPage={previousPage}/>
        </main>
        <div className="widgets-container">
            <Contents items={["What is the PHP syntax?", "Important syntax rules"]}/>
            <AdvertWidget/>
        </div>
    </div>)
}