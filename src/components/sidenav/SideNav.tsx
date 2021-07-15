import React from "react";
import { FontAwesome } from "../../shared/icons/icon";
import Button, { ButtonType } from "../button/Button";
import NavList from "../navlist/NavList";
import UserList from "../userlist/UserList";
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
        <div className="middle-section">
            <span className={"nav-wrapper"}></span>
            <p>Log in to follow creators, like videos, and view comments.</p>
            <Button type={ButtonType.PINK_OUTLINED} text={"Log in"}/>
        </div>
        <span className={"nav-wrapper"}></span>
        <p>Suggested accounts</p>
        <UserList.Container>
            <UserList.Account username={"gordonramsayofficial"} description={"Gordon Ramsay"} imageURL={"https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1647754017437702~c5_100x100.jpeg?x-expires=1626444000&x-signature=COz7D77UKsgRuAa0VCrCckX5ahc%3D"} isVerifed={true}/>
            <UserList.Account username={"dualipaofficial"} description={"Dua Lipa"} imageURL={"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1657268694828037~c5_100x100.jpeg?x-expires=1626444000&x-signature=O0GGjCBPfClH49BlsMbUb0vhm7k%3D"} isVerifed={true}/>
            <UserList.Account username={"therock"} description={"The Rock"} imageURL={"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1647596478025734~c5_100x100.jpeg?x-expires=1626462000&x-signature=egvJidY2WQ%2FT0nxg%2BRZvVdXNT24%3D"} isVerifed={true}/>
            <UserList.Account username={"niallhoran"} description={"Niall Horan"} imageURL={"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f2933b36608c12c5e36ee5c7906d3a0a~c5_100x100.jpeg?x-expires=1626462000&x-signature=WFZc%2BK2VEAR7qVnuUytJfstWEsg%3D"} isVerifed={true}/>
            <UserList.Account username={"coldplay"} description={"coldplay"} imageURL={"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ac23e6ac9322801426d0b0756bed5bc6~c5_100x100.jpeg?x-expires=1626462000&x-signature=75Tgcz9mp4NBEEUBnW50rhiK%2FqQ%3D"} isVerifed={true}/>
        </UserList.Container>
    </React.Fragment>)
}