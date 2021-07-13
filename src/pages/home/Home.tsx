import React from 'react'
import { SideNav } from '../../components/sidenav/SideNav';
import { FontAwesome } from '../../shared/icons/icon';
import './Home.scss';

import Post from '../../components/post/Post';

function Home() {
    return(
        <div className="main-body">
            <div className="side-navbar">
                <div className="nav-container">
                    <SideNav/>
                </div>
            </div>
            <div className="post-feed">
                <Post/>
            </div>
        </div>
    )
}

export default Home