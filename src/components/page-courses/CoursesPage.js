import LessonWidget from "../utils/widgets/lesson-widget/LessonWidget";

export default function CoursesPage() {

    return (
        <main className={"courses-page"}>
            <div className="lessons-header">
                <h3>Select your course</h3>
                <p>From the dead basics, all the way to advanced. There's a course here that suits everyone no matter your skill level. Take your pick and start learning a new element of PHP!</p>
            </div>
            <h2>Basics</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction-to-php"} title={"Introduction to PHP"} description={"Learn the basics and history about PHP."}/>
                <LessonWidget url={"getting-started"} title={"Getting Started"} description={"Learn and understand how to run PHP on your machine today."}/>
                <LessonWidget url={"how-it-works"} title={"How it works"} description={"How does PHP work, including where is it run and how."}/>
                <LessonWidget url={"syntax"} title={"Syntax"} description={"Understanding the specific coding syntax of PHP."}/>
                <LessonWidget url={"echo-(print)"} title={"Echo (print)"} description={"Learn the most known function in PHP, the echo function."}/>
                <LessonWidget url={"php-variables"} title={"PHP Variables"} description={"How to store data in PHP using variables and types."}/>
                <LessonWidget url={"comments-in-php"} title={"Comments in PHP"} description={"Understand how to comment and document your PHP code."}/>
            </div>

            <h2>Data types</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"introduction"} title={"Introduction"} description={"An introduction to data types in PHP."}/>
                <LessonWidget url={"string"} title={"String"} description={"The string type and what can be achieved with it's functions."}/>
                <LessonWidget url={"integer"} title={"Integer"} description={"The integer data type and how it works."}/>
                <LessonWidget url={"boolean"} title={"Boolean"} description={"The boolean data type to show a true/false result."}/>
                <LessonWidget url={"float"} title={"Float"} description={"Understanding how the float data type works in PHP."}/>
            </div>

            <h2>Advanced data types</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"arrays"} title={"Arrays"} description={"How to store multiple sets of data using PHP arrays."}/>
                <LessonWidget url={"more-types-of-arrays"} title={"More arrays"} description={"Looking into more types of arrays in PHP."}/>
                <LessonWidget url={"adding-to-arrays"} title={"Adding to arrays"} description={"Learn how to add items to your array."}/>
                <LessonWidget url={"removing-from-arrays"} title={"Removing from arrays"} description={"Understand how to remove items from your array in PHP."}/>
                <LessonWidget url={"objects"} title={"Objects"} description={"How objects are used in PHP to store data."}/>
                <LessonWidget url={"using-objects"} title={"Using objects"} description={"How you can use PHP objects to your advantage."}/>
                <LessonWidget url={"operators"} title={"Operators"} description={"Learn logical and comparison operators in PHP."}/>
                <LessonWidget url={"functions"} title={"Functions"} description={"Understanding how functions work in PHP to help save time."}/>
            </div>

            <h2>Logic</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"the-if-statement"} title={"If statements"} description={"Run code conditionally with if statements."}/>
                <LessonWidget url={"the-if-else-statement"} title={"If else statement"} description={"Learn how to if else statement works."}/>
                <LessonWidget url={"the-else-if-statement"} title={"Else if statement"} description={"Learn how the else if statement works."}/>
                <LessonWidget url={"the-switch-statement"} title={"Switch statement"} description={"Simplify your code by understanding the switch statement."}/>
            </div>

            <h2>Loops</h2>
            <div className="lesson-widgets-container">
                <LessonWidget url={"the-for-loop"} title={"The for loop"} description={"Looping in PHP using the for loop."}/>
                <LessonWidget url={"the-foreach-loop"} title={"The foreach loop"} description={"Loop through data with the foreach loop."}/>
                <LessonWidget url={"the-while-loop"} title={"The while loop"} description={"Loop conditionally using the while loop."}/>
                <LessonWidget url={"the-do-while-loop"} title={"The do while loop"} description={"Learning how the do while loop differs from the while loop."}/>
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
        </main>)
}