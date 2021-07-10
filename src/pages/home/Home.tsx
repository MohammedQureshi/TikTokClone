import React from 'react'
import { NavList } from '../../components/navlist/NavList'
import NavListItem from '../../components/navlist/NavListItem';
import { FontAwesome } from '../../shared/icons/icon';

function Home() {
    
    const navItems : Array<JSX.Element> = [
        <NavListItem icon={<i className={FontAwesome.Icon.HOME}/>} text={"For You"}/>,
        <NavListItem icon={<i className={FontAwesome.Icon.FOLLOWING}/>} text={"Following"}/>
    ];
    return(
        <div>
            <NavList items={navItems}/>
        </div>
    )
}

export default Home