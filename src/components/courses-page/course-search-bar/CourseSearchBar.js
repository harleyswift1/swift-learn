import "./CourseSearchBar.css"

export default function CourseSearchBar() {
    return(
        <div className={"course-search-bar-container"}>
            <input id="course-searchbar-input" name="course-search-bar-input" className="course-search-bar-input" placeholder={"Search courses..."}/>
        </div>
    )
}