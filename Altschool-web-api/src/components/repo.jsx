import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import ScrollToTop from './scrollToTop';
const Repo = () => {
    const {id} = useParams();
    const {data: repo, isPending, error} = useFetch("https://api.github.com/repos/Assistantkiwi/" + id )
  return (
    <div>
        {error && <div> { error }</div>}
        {isPending && <div> loading... </div>}
        {repo && (
            <div className='repo'>
                <h2>Name: {repo.name}</h2>
                <p>Description: {repo.description ? repo.description : "No description for this repo, " + repo.owner.login + " !"}</p>
                <h4>Created at : {repo.created_at.slice(0,10)}</h4>
                <h4>Last Update : {repo.updated_at.slice(0,10)}</h4>
                <h4>Size : {repo.size} kb</h4>
            </div>
        )}
        <ScrollToTop/>
    </div>
  )
}
export default Repo