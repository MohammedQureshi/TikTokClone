import React from 'react'
import Button from '../button/Button'
import SearchBox from '../searchbox/SearchBox'
import './Navbar.scss'

function Navbar(){

    function doSomething(){
        console.log('doSomething');

    }
    return(
        <div className="navbar">
            <SearchBox/>
            <Button type="normal" text="Upload" event={doSomething}/>
            <Button type="filled" text="Login" event={doSomething}/>
            <Button type="outline" text="Login" event={doSomething}/>
        </div>
    )
}

export default Navbar