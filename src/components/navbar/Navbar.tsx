import React from 'react'
import Button from '../button/Button'
import SearchBox from '../searchbox/SearchBox'

function Navbar(){

    function doSomething(){
        console.log('doSomething');

    }
    return(
        <div className="navbar">
            <SearchBox/>
            <Button type="Hello" event={doSomething}/>
        </div>
    )
}

export default Navbar