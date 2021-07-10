import React from 'react'
import Button, { ButtonType } from '../button/Button'
import SearchBox from '../searchbox/SearchBox'
import './Navbar.scss'
import TikTokLogo from '../../images/TikTokLogo.svg'

function Navbar(){

    function doSomething(){
        console.log('doSomething');

    }
    return(
        <div className="navbar">
            <img src={TikTokLogo} alt="TikTok Logo"/>
            <SearchBox/>
            <Button type={ButtonType.NORMAL} text="Upload" event={doSomething}/>
            <Button type={ButtonType.FILLED} text="Login" event={doSomething}/>
            <button className="ellipsis"><i className="fas fa-ellipsis-v"></i></button>
        </div>
    )
}

export default Navbar