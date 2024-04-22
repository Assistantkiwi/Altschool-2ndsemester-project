import {Link, useRouteError} from 'react-router-dom'
import Navbar from './navbar'
const ErrPage = () => {
    const error = useRouteError();
    return(
        <div>
            <Navbar/>
            <h3>{error.status}: {error.statusText}</h3>
            <p>{error.data}</p>
            <Link to={"/"}>go back</Link>
        </div>
    )
}

export default ErrPage
