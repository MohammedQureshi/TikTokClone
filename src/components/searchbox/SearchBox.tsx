import React, {MouseEvent, useState} from 'react'
import './SearchBox.scss'

function SearchBox(){

    const[accountSearch, setAccountSearch] = useState('');

    function searchAccount(event: MouseEvent){
        event.preventDefault();
        console.log(accountSearch);
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