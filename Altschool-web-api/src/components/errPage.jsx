import {Link, useRouteError} from 'react-router-dom'
import Navbar from './navbar'
const ErrPage = () => {
    const error = useRouteError();
    return(
        <div className='error'>
            <Navbar/>
            <h3 className='status'>{error.status}: {error.statusText}</h3>
            <p className='data'>{error.data}</p>
            <Link to={"/"} className='home'>Go back</Link>
        </div>
    )
}

export default ErrPage
