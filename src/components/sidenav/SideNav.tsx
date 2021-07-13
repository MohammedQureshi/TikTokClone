import React from "react";
import { FontAwesome } from "../../shared/icons/icon";
import Button, { ButtonType } from "../button/Button";
import NavList from "../navlist/NavList";
import './SideNav.scss';

export const SideNav : React.FC = () => {
    // nav list icon & name
    // paragrah text 
    // button 
    // header 
    // suggested accounts
    // header 
    // hashtags (discover)
    // nav list 
    return (<React.Fragment>
        <NavList.Nav>
            <NavList.Item icon={<i className={FontAwesome.Icon.HOME}/>} text={"For You"} className={"selected"}/>
            <NavList.Item icon={<i className={FontAwesome.Icon.FOLLOWING}/>} text={"Following"}/>
        </NavList.Nav>
        <span className={"nav-wrapper"}></span>
        <p>Log in to follow creators, like videos, and view comments.</p>
        <Button type={ButtonType.PINK_OUTLINED} text={"Log in"}/>
    </React.Fragment>)
}