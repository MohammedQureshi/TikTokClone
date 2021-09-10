import React, { ReactElement } from 'react';
import Button, { ButtonType } from '../button/Button';
import Video, { VideoProps } from '../video/Video';
import  foodbylaila  from '../../images/profiles/foodbylaila.jpeg'
import miakhalifa from '../../images/profiles/miakhalifa.jpeg'
import booked_up from '../../images/profiles/booked_up.jpeg'
import './Post.scss'

import videoOne from '../../videos/booked_up.mp4'
import videoTwo from '../../videos/miakhalifa.mp4'
import videoThree from '../../videos/foodbylaila.mp4'

interface PostProps extends VideoProps{
    profilePicture?:string;
    username?:string;
    verified?:boolean;
    fullname?:string;
    description?:string;
    music?:string;
}

class addPost{
    profilePicture: string;
    username: string;
    verified: boolean;
    fullname: string;
    description: string;
    music: string;
    src: string;
    likes: number;
    comments: number;
    shares: number;
    constructor(profilePicture: string, username: string, verified: boolean, fullname: string, description: string, music: string, src :string, likes:number, comments:number, shares:number){
        this.profilePicture = profilePicture ?? "";
        this.username = username ?? "";
        this.verified = verified ?? false;
        this.fullname = fullname ?? "";
        this.description = description ?? "";
        this.music = music ?? "";
        this.src = src ?? "";
        this.likes = likes ?? 0;
        this.comments = comments ?? 0;
        this.shares = shares ?? 0;
    }
}

const Post = () : JSX.Element => {
    const postList : addPost[] = [
        new addPost(
            foodbylaila,
            "foodbylaila",
            false,
            "Food by Laila",
            "1am feast🤤 #foodbylaila #fyp #pasta #blowthisup",
            "Monkeys Spinning Monkeys - Kevin MacLeod",
            videoThree
            ,700.9,4463,12.9
        ),
        new addPost(
            miakhalifa,
            "miakhalifa",
            true,
            "Mia Khalifa",
            "Glo down 😭 STREAM BUILD A BISH FOR CLEAR SKIN AND FREE PALESTINE FOR SHINY HAIR",
            "Gods Plan Slowed - Payton stan",
            videoTwo
            ,21.9,220,325
        ),
        new addPost(
            booked_up,
            "booked_up",
            false,
            "Kerrie💀",
            "H2-hoe #booktok #books #tbr #smuttok #bookedup #smutbooks",
            "original sound - kathryn",
            videoOne,
            2734,20,29
        ),
        
    ];

    let posts : ReactElement[] =  postList.map((postList:addPost, index) => {
        return(
            <div className="post" key={index}>
                <div className="profile-picture">
                    <img src={postList.profilePicture} />
                </div>
                <div className="post-info">
                    <Button type={ButtonType.PINK_OUTLINED} text="Follow" />
                    <div className="post-username">
                        <h1>{postList.username}</h1>
                        {postList.verified &&  <i className="fas fa-check-circle" />}
                        <p>{postList.fullname}</p>
                    </div>
                    <p className="post-description">{postList.description}</p>
                    <div className="post-music">
                        <i className="fas fa-music"></i>
                        <h2>{postList.music}</h2>
                    </div>
                    <Video src={postList.src} likes={postList.likes}  comments={postList.comments} shares={postList.shares} />
                </div>
            </div>
        )
    })

    return <React.Fragment>
        { posts } 
    </React.Fragment>
}

export default Post