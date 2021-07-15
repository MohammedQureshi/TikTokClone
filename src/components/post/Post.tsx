import React, { ReactElement } from 'react';
import Button, { ButtonType } from '../button/Button';
import Video, { VideoProps } from '../video/Video';
import './Post.scss'

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
            "https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/88531086017ad208fecee57564db4747.jpeg?x-expires=1626444000&x-signature=BySC8EtBQ0Rd1N5bbQVptAor%2BFw%3D",
            "erim",
            true,
            "Erim",
            "Nice to meet you x #desi #punjabi #asianclothes #indianwedding",
            "original sound - Tesher",
            "https://v16m.tiktokcdn.com/19116edc3eedf361212ae011f050d21b/60f09f75/video/tos/useast2a/tos-useast2a-ve-0068c004/cdba40adc33540b48631fbaf07e13d05/?a=1233&br=3078&bt=1539&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=2021071514490001019021920709159976&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVqeXc6ZWVuNTMzNzczM0ApPDk0OTY3ZmQ7NzNpZGg6ZWdhYWowNmMtcmdgLS1kMTZzc2EuNTAxYjZfMjY1NTRhLy06Yw%3D%3D&vl=&vr="
            ,21.9,220,325
        ),
        new addPost(
            "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b2dbe9aba26acd8ebf4d2d4df74b01a6.jpeg?x-expires=1626300000&x-signature=9ZRemck%2FfRS5bk9hYSRvBIE1W%2F8%3D",
            "erim",
            false,
            "Erim",
            "Nice to meet you x #desi #punjabi #asianclothes #indianwedding",
            "original sound - Tesher",
            "https://v19.tiktokcdn.com/d6e868bbdcec9ec54576d5b8176c2c88/60ee661c/video/tos/alisg/tos-alisg-pve-0037c001/d5f37fde2ed943e6b485ec647c713888/?a=1233&br=3524&bt=1762&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107132220350101902192222246A031&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2p1cTM6ZmRkNjMzODczNEApOTQ2OWVlPDw5N2c7ODQ0OWcwajE1cjRvZGpgLS1kMS1zczA0LTBfLjEtMjJfNGIzM2I6Yw%3D%3D&vl=&vr="
            ,21.9,220,325
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
                        {postList.verified &&  <i className="fas fa-certificate" />}
                        <p>{postList.fullname}</p>
                    </div>
                    <p>{postList.description}</p>
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