import React, { ReactElement } from 'react';
import Video, { VideoProps } from '../video/Video';

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
            "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b2dbe9aba26acd8ebf4d2d4df74b01a6.jpeg?x-expires=1626300000&x-signature=9ZRemck%2FfRS5bk9hYSRvBIE1W%2F8%3D",
            "erim",
            false,
            "Erim",
            "Nice to meet you x #desi #punjabi #asianclothes #indianwedding",
            "original sound - Tesher",
            "https://v19.tiktokcdn.com/d6e868bbdcec9ec54576d5b8176c2c88/60ee661c/video/tos/alisg/tos-alisg-pve-0037c001/d5f37fde2ed943e6b485ec647c713888/?a=1233&br=3524&bt=1762&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107132220350101902192222246A031&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2p1cTM6ZmRkNjMzODczNEApOTQ2OWVlPDw5N2c7ODQ0OWcwajE1cjRvZGpgLS1kMS1zczA0LTBfLjEtMjJfNGIzM2I6Yw%3D%3D&vl=&vr="
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
                <Video src={postList.src} likes={postList.likes}  comments={postList.comments} shares={postList.shares} />
            </div>
        )
    })

    return <React.Fragment>
        { posts } 
    </React.Fragment>
}

export default Post