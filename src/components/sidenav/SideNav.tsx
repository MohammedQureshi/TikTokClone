import React from "react";
import { FontAwesome } from "../../shared/icons/icon";
import Button, { ButtonType } from "../button/Button";
import NavList from "../navlist/NavList";
import UserList from "../userlist/UserList";
import './SideNav.scss';

import therock from '../../images/profiles/therock.jpeg';
import nialhoran from '../../images/profiles/nialhoran.jpeg';
import coldplay from '../../images/profiles/coldplay.jpeg';
import gordon from '../../images/profiles/gordon.jpeg'
import dualipa from '../../images/profiles/dualipa.jpeg'

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
        <div className="middle-section">
            <span className={"nav-wrapper"}></span>
            <p>Log in to follow creators, like videos, and view comments.</p>
            <Button type={ButtonType.PINK_OUTLINED} text={"Log in"}/>
        </div>
        <span className={"nav-wrapper"}></span>
        <p>Suggested accounts</p>
        <UserList.Container>
            <UserList.Account username={"gordonramsayofficial"} description={"Gordon Ramsay"} imageURL={gordon} isVerifed={true}/>
            <UserList.Account username={"dualipaofficial"} description={"Dua Lipa"} imageURL={dualipa} isVerifed={true}/>
            <UserList.Account username={"therock"} description={"The Rock"} imageURL={therock} isVerifed={true}/>
            <UserList.Account username={"niallhoran"} description={"Niall Horan"} imageURL={nialhoran} isVerifed={true}/>
            <UserList.Account username={"coldplay"} description={"coldplay"} imageURL={coldplay} isVerifed={true}/>
        </UserList.Container>
    </React.Fragment>)
}