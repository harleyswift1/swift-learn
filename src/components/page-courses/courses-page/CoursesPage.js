import "./CoursesPage.css"
import LessonWidget from "../../utils/widgets/lesson-widget/LessonWidget";

export default function CoursesPage() {

    return (<div className="main-component">
        <main className={"courses-page"}>
            <div className="lessons-header">
                <h3>Select your course</h3>
                <p>From the dead basics, all the way to advanced. There's a course here that suits everyone no matter your skill level. Take your pick and start learning a new element of PHP!</p>
            </div>
            <h2>Basics</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Introduction to PHP"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"getting-started"} title={"Getting Started"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"how-it-works"} title={"How it works"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"syntax"} title={"Syntax"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"echo-(print)"} title={"Echo (print)"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"php-variables"} title={"PHP Variables"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"comments-in-php"} title={"Introduction to PHP"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
            </div>

            <h2>Data types</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction"} title={"Introduction"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"string"} title={"String"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"integer"} title={"Integer"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"boolean"} title={"Boolean"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"float"} title={"Float"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
            </div>

            <h2>Advanced data types</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"arrays"} title={"Arrays"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"more-types-of-arrays"} title={"More arrays"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"adding-to-arrays"} title={"Adding to arrays"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"removing-from-arrays"} title={"Removing from arrays"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"objects"} title={"Objects"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"using-objects"} title={"Using objects"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"operators"} title={"Operators"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"functions"} title={"Functions"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
            </div>

            <h2>Logic</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"the-if-statement"} title={"If statements"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-if-else-statement"} title={"If else statement"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-else-if-statement"} title={"Else if statement"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-switch-statement"} title={"Switch statement"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
            </div>

            <h2>Loops</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"the-for-loop"} title={"The for loop"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-foreach-loop"} title={"The foreach loop"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-while-loop"} title={"The while loop"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
                <LessonWidget url={"the-do-while-loop"} title={"The do while loop"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum."}/>
            </div>

            <h2>Miscellaneous</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
            </div>

            <h2>Forms</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
            </div>

            <h2>Advanced PHP</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"These lessons are coming soon!"}/>
            </div>

            <h2>Challenges</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"This challenge is coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"This challenge is coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"This challenge is coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"This challenge is coming soon!"}/>
                <LessonWidget url={"introduction-to-php"} title={"Coming soon!"} description={"This challenge is coming soon!"}/>
            </div>
        </main>
    </div>)
}