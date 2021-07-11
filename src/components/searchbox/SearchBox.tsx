import React, {MouseEvent, useState} from 'react'
import './SearchBox.scss'
import { useHistory } from "react-router-dom";
function SearchBox(){

    const[accountSearch, setAccountSearch] = useState('');
    let history = useHistory();
    function searchAccount(event: MouseEvent){
        event.preventDefault();
        history.push('/search/'+accountSearch)
    }

    return(
        <div className="search-box">
            <input 
                onChange={e => setAccountSearch(e.target.value)}
                value={accountSearch}
                type="text" 
                placeholder="Search accounts"
            />
            <button onClick={searchAccount}><i className="fas fa-search"/></button>
        </div>
    )
}

export default SearchBox