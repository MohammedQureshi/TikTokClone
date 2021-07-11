import React from 'react'
import { NavList } from '../../components/navlist/NavList'
import NavListItem from '../../components/navlist/NavListItem';
import { FontAwesome } from '../../shared/icons/icon';
import './Home.scss';

function Home() {
    
    const navItems : Array<JSX.Element> = [
        <NavListItem icon={<i className={FontAwesome.Icon.HOME}/>} text={"For You"} className={"selected"}/>,
        <NavListItem icon={<i className={FontAwesome.Icon.FOLLOWING}/>} text={"Following"}/>
    ];
    return(
        <div className="main-body">
            <div className="side-navbar"><NavList items={navItems}/></div>
            <div className="video-feed"><h1>Hello </h1></div>
        </div>
    )
}

export default Home