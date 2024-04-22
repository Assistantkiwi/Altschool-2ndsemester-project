import SearchBar from "./searchBar"
import useFetch from "./useFetch"
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Navbar = ({inputValue, setInputValue}) => {
    const {data: user, isPending, error} = useFetch("https://api.github.com/users/Assistantkiwi")
    return(
        <div className="intro">
            {error && "Assistantkiwi"}
            {isPending && "Loading Chidinma"}
            {user &&
            <div>
                <nav className="navbar">
                    <h3 className="nav-logo">{user.login}</h3>
                    <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
                    <ul className="navbar-btn">
                        <Link className="link nav-link-1" to={"/"}>All Repositories</Link>
                        <Link className="link nav-link-2" to={"https://github.com/new"}>Create</Link>
                    </ul>
                </nav>
            </div>}
        </div>
    )
}
export default Navbar