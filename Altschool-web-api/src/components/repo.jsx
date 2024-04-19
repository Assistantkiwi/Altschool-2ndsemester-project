import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Repo = () => {
    const {name} = useParams(); 
    const {data, isPending, error} = useFetch("https://api.github.com/repos/Assistantkiwi/" + 
      name )
    return (
        <div>
            {error && <div> { error } </div>}
            {isPending && <div> Loading... </div>}
            {data && (
              <div>
                {data.name}
              </div> 
        )}
        </div>
    )
}

export default Repo 