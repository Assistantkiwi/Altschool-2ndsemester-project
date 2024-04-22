import useFetch from "./useFetch"
import Navbar from "./navbar";
import { Link, Outlet } from 'react-router-dom'

import { useState } from "react";
const Repos = () => {
    const {data, isPending, error} = useFetch("https://api.github.com/users/Assistantkiwi/repos");
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <Navbar inputValue={inputValue} setInputValue={setInputValue}/>
            <div className="outlet">
                <Outlet/>
            </div>
            {error && <div> { error } </div>}
            {isPending && <div> Loading... </div>}
            <div className="repos">
            {data && data.map((repo) => (
                <div key={repo.name}>
                {repo.name.toLowerCase().includes(inputValue.toLowerCase()) ?
                <div className={"repos-content bg-" + String(repo.id).charAt(3) % 4}>
                    <Link className={"link"} to={"/repo/" + repo.name}>
                        <h3>{ repo.name }</h3>
                        {repo.description ? repo.description : "No description  for this repo."}
                    </Link>
                </div>
            : ""}
            </div>
            ))}
            </div>
        </div>
    )
}
export default Repos