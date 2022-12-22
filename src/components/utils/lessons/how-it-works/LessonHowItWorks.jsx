import Breadcrumb from "../../../page-lesson/breadcrumb/Breadcrumb";
import Contents from "../../../page-lesson/side-widgets/contents/Contents";
import AdvertWidget from "../../../page-lesson/side-widgets/advert/AdvertWidget";
import PHPCode from "../../widgets/php/PHPCode";
import Tooltip from "../../widgets/tooltip/Tooltip";
import PageButtons from "../../reusable/PageButtons/PageButtons";

export default function LessonHowItWorks() {
    const previousPage = "/lesson/introduction-to-php";
    const nextPage = "/lesson/syntax";

    return (<div className={"lesson-page"}>
        <main>
            <Breadcrumb topic={"Basics"} subtopic={"How it works"}/>
            <h1>How it works</h1>
            <h3 id={"How is PHP run?"}>How is PHP run?</h3>
            <p>To write your own PHP code, you will need a text editor and a web server with PHP installed. First, open
                your text editor and create a new file. Then, type &lt;?php at the top of the file.</p>
            <p>This tells the
                web server that the file contains PHP code. Next, you can write your PHP code after this opening tag. When you
                are done writing your code, save the file with a .php extension.</p>
            <PHPCode description="This is how you write Hello World in PHP" content={"<?php \n  echo 'Hello World!'; \n?>"}/>
            <h3 id={"When writing PHP code"}>When writing PHP code</h3>
            <p>When writing PHP, it is important to consider several things. First, you should make sure that your code is clean, well-organized,
                and easy to read. This will make it easier to maintain and debug, as well as to collaborate with others.</p>
            <p>Second, you should consider security. Make sure to properly validate user input and escape output
                to prevent against common vulnerabilities such as SQL injection and cross-site scripting.</p>
            <p>Finally, you should consider performance. Use best practices to ensure that your code is efficient and scales well
                as your site grows. This may include using caching, optimizing database queries, and using the appropriate data types and data structures.</p>
            <Tooltip type={"tip"} icon={"fa-regular fa-lightbulb"} title={"Tip"} content={"Make sure you optimize your code for performance and scalability. This may include using caching, optimizing database queries, and choosing the appropriate data types and data structures."}/>
            <p>PHP is a fun language to write because it is powerful, flexible, and easy to use. It has a vast ecosystem of libraries and frameworks that make
                it easy to develop complex web applications quickly. PHP also has a large and supportive community, so help is always available when you need it.</p>
            <PageButtons nextPage={nextPage} previousPage={previousPage}/>
        </main>
        <div className="widgets-container">
            <Contents items={["How is PHP run?", "When writing PHP code", "Congratulations!"]}/>
            <AdvertWidget/>
        </div>
    </div>)
}