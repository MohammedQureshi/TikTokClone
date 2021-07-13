import React from 'react'
import { NavList } from '../../components/navlist/NavList'
import NavListItem from '../../components/navlist/NavListItem';
import { FontAwesome } from '../../shared/icons/icon';
import './Home.scss';
import Video from '../../components/video/Video'

function Home() {
    
    const navItems : Array<JSX.Element> = [
        <NavListItem icon={<i className={FontAwesome.Icon.HOME}/>} text={"For You"} className={"selected"}/>,
        <NavListItem icon={<i className={FontAwesome.Icon.FOLLOWING}/>} text={"Following"}/>
    ];
    return(
        <div className="main-body">
            <div className="side-navbar"><NavList items={navItems}/></div>
            <div className="video-feed">
                <Video src="https://v16m.tiktokcdn.com/cf93935f3e1c8cc89b9469a720202b19/60ee5893/video/tos/useast2a/tos-useast2a-ve-0068c004/cdba40adc33540b48631fbaf07e13d05/?a=1233&br=3078&bt=1539&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107132122020101891940811342DBA8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVqeXc6ZWVuNTMzNzczM0ApPDk0OTY3ZmQ7NzNpZGg6ZWdhYWowNmMtcmdgLS1kMTZzc2EuNTAxYjZfMjY1NTRhLy06Yw%3D%3D&vl=&vr=" likes={3244} comments={324} shares={12} />
            </div>
        </div>
    )
}

export default Home