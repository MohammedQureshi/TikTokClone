import React from 'react'
import { useParams } from "react-router-dom"; 

type QueryParams = {
    result: string;
}

function UserResult(){
    const  {result}  = useParams<QueryParams>();
    return(
        <div>
            <h2>User Result {result}</h2>
        </div>
    )
}

export default UserResult