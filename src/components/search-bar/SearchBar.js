import "./SearchBar.css"

export default function SearchBar() {
    return (<div className={"search-bar-container"}>
        <input id="searchbar-input" name="search-bar-input" className="search-bar-input" placeholder={"Search..."}/>
    </div>)
}