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
            <div className="Logo"><img src={TikTokLogo} alt="TikTok Logo"/></div>
            <div className="SearchBox"><SearchBox/></div>
            <div className="Buttons">
                <div className="UploadButton"><Button text="Upload" event={doSomething}/></div>
                <Button type={ButtonType.FILLED} text="Log in" event={doSomething}/>
                <button className="ellipsis"><i className="fas fa-ellipsis-v"></i></button>
            </div>
        </div>
    )
}

export default Navbar