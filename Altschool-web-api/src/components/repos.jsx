import useFetch from "./useFetch"
import { Link } from 'react-router-dom'

const Repos = () => {
  const {data, isPending, error} = useFetch("https://api.github.com/users/Assistantkiwi/repos");
  return (
    <div>
      {error && <div> {error} </div>}
      {isPending && <div> loading... </div>}
      {data && data.map((repo) => (
        <div key={data.name} className="repo">
            <Link to="/repo/:id" className="link">
            <h3> { repo.name } </h3>
            <p> {repo.description ? repo.description : "No description for this repo"} </p>
        </Link> 
        </div>
      ))}
    </div>
  )
}

export default Repos
