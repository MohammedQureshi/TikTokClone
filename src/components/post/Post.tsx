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
            "foodbylaila",
            false,
            "Food by Laila",
            "1am feast🤤 #foodbylaila #fyp #pasta #blowthisup",
            "Monkeys Spinning Monkeys - Kevin MacLeod",
            "https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/00d089e9293a4411aecdc6b4036ccb19/?a=1988&br=3686&bt=1843&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1626392885&ft=Q9BExE7U_4ka&l=20210715174737010190189137192463B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2VnOmU6ZnNtNjMzODczNEApaDU8Mzg7NWRkNzg6ZTYzZ2djaC9pcjQwMWtgLS1kMS1zczVfM2BiMjUtX2JhLTViYl86Yw%3D%3D&signature=3bbb60fab0bd036e239db14aa9993a4d&tk=tt_webid_v2&vl=&vr="
            ,700.9,4463,12.9
        ),
        new addPost(
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c17f4eee2c2c4e709c4f3c4706372677~c5_100x100.jpeg?x-expires=1626454800&x-signature=wpVjae3TRCdZB2U0%2BmRvmpD668U%3D",
            "miakhalifa",
            true,
            "Mia Khalifa",
            "Glo down 😭 STREAM BUILD A BISH FOR CLEAR SKIN AND FREE PALESTINE FOR SHINY HAIR",
            "Gods Plan Slowed - Payton stan",
            "https://v16m.tiktokcdn.com/999f0f1bc9c61f935b1977f4b691eca8/60f0c77c/video/tos/useast2a/tos-useast2a-ve-0068c001/75300e3c850148feb4bd41bc63d523b5/?a=1233&br=3880&bt=1940&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=20210715174034010191057039132478ED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y6cHQ0OGk8NTMzNzczM0ApZDs0NDRkZWVpNzk8NDM6M2drNTJsXl9qcGNgLS1kMTZzczU0YF80NTA1MGBjLS01M2A6Yw%3D%3D&vl=&vr="
            ,21.9,220,325
        ),
        new addPost(
            "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/a288df68a38b87e4f7bebc8308c940ae~c5_100x100.jpeg?x-expires=1626454800&x-signature=imk3UK8glhlqRPqOcFIxD5gozHs%3D",
            "booked_up",
            false,
            "Kerrie💀",
            "H2-hoe #booktok #books #tbr #smuttok #bookedup #smutbooks",
            "original sound - kathryn",
            "https://v39-eu.tiktokcdn.com/3e7ea9b968637c8baa92eb75338a3794/60f0c8b1/video/tos/alisg/tos-alisg-pve-0037c001/56956f19f5074549bd3814f43fb73090/?a=1233&br=3998&bt=1999&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=2021071517454601019021820142246962&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anV2OHY7dm42NjMzODczNEApOjNoN2c1ZTs4NzdpNTlkZmdrYGptXzA2NjZgLS1kMS1zczFiYV5hLy0yL18wY2FgMTU6Yw%3D%3D&vl=&vr=",
            2734,20,29
        ),
        new addPost(
            "https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/88531086017ad208fecee57564db4747.jpeg?x-expires=1626444000&x-signature=BySC8EtBQ0Rd1N5bbQVptAor%2BFw%3D",
            "foodbylaila",
            false,
            "Food by Laila",
            "1am feast🤤 #foodbylaila #fyp #pasta #blowthisup",
            "Monkeys Spinning Monkeys - Kevin MacLeod",
            "https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/00d089e9293a4411aecdc6b4036ccb19/?a=1988&br=3686&bt=1843&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1626392885&ft=Q9BExE7U_4ka&l=20210715174737010190189137192463B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2VnOmU6ZnNtNjMzODczNEApaDU8Mzg7NWRkNzg6ZTYzZ2djaC9pcjQwMWtgLS1kMS1zczVfM2BiMjUtX2JhLTViYl86Yw%3D%3D&signature=3bbb60fab0bd036e239db14aa9993a4d&tk=tt_webid_v2&vl=&vr="
            ,700.9,4463,12.9
        ),
        new addPost(
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c17f4eee2c2c4e709c4f3c4706372677~c5_100x100.jpeg?x-expires=1626454800&x-signature=wpVjae3TRCdZB2U0%2BmRvmpD668U%3D",
            "miakhalifa",
            true,
            "Mia Khalifa",
            "Glo down 😭 STREAM BUILD A BISH FOR CLEAR SKIN AND FREE PALESTINE FOR SHINY HAIR",
            "Gods Plan Slowed - Payton stan",
            "https://v16m.tiktokcdn.com/999f0f1bc9c61f935b1977f4b691eca8/60f0c77c/video/tos/useast2a/tos-useast2a-ve-0068c001/75300e3c850148feb4bd41bc63d523b5/?a=1233&br=3880&bt=1940&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=20210715174034010191057039132478ED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y6cHQ0OGk8NTMzNzczM0ApZDs0NDRkZWVpNzk8NDM6M2drNTJsXl9qcGNgLS1kMTZzczU0YF80NTA1MGBjLS01M2A6Yw%3D%3D&vl=&vr="
            ,21.9,220,325
        ),
        new addPost(
            "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/a288df68a38b87e4f7bebc8308c940ae~c5_100x100.jpeg?x-expires=1626454800&x-signature=imk3UK8glhlqRPqOcFIxD5gozHs%3D",
            "booked_up",
            false,
            "Kerrie💀",
            "H2-hoe #booktok #books #tbr #smuttok #bookedup #smutbooks",
            "original sound - kathryn",
            "https://v39-eu.tiktokcdn.com/3e7ea9b968637c8baa92eb75338a3794/60f0c8b1/video/tos/alisg/tos-alisg-pve-0037c001/56956f19f5074549bd3814f43fb73090/?a=1233&br=3998&bt=1999&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=2021071517454601019021820142246962&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anV2OHY7dm42NjMzODczNEApOjNoN2c1ZTs4NzdpNTlkZmdrYGptXzA2NjZgLS1kMS1zczFiYV5hLy0yL18wY2FgMTU6Yw%3D%3D&vl=&vr=",
            2734,20,29
        ),
        new addPost(
            "https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/88531086017ad208fecee57564db4747.jpeg?x-expires=1626444000&x-signature=BySC8EtBQ0Rd1N5bbQVptAor%2BFw%3D",
            "foodbylaila",
            false,
            "Food by Laila",
            "1am feast🤤 #foodbylaila #fyp #pasta #blowthisup",
            "Monkeys Spinning Monkeys - Kevin MacLeod",
            "https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/00d089e9293a4411aecdc6b4036ccb19/?a=1988&br=3686&bt=1843&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1626392885&ft=Q9BExE7U_4ka&l=20210715174737010190189137192463B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2VnOmU6ZnNtNjMzODczNEApaDU8Mzg7NWRkNzg6ZTYzZ2djaC9pcjQwMWtgLS1kMS1zczVfM2BiMjUtX2JhLTViYl86Yw%3D%3D&signature=3bbb60fab0bd036e239db14aa9993a4d&tk=tt_webid_v2&vl=&vr="
            ,700.9,4463,12.9
        ),
        new addPost(
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c17f4eee2c2c4e709c4f3c4706372677~c5_100x100.jpeg?x-expires=1626454800&x-signature=wpVjae3TRCdZB2U0%2BmRvmpD668U%3D",
            "miakhalifa",
            true,
            "Mia Khalifa",
            "Glo down 😭 STREAM BUILD A BISH FOR CLEAR SKIN AND FREE PALESTINE FOR SHINY HAIR",
            "Gods Plan Slowed - Payton stan",
            "https://v16m.tiktokcdn.com/999f0f1bc9c61f935b1977f4b691eca8/60f0c77c/video/tos/useast2a/tos-useast2a-ve-0068c001/75300e3c850148feb4bd41bc63d523b5/?a=1233&br=3880&bt=1940&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=20210715174034010191057039132478ED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y6cHQ0OGk8NTMzNzczM0ApZDs0NDRkZWVpNzk8NDM6M2drNTJsXl9qcGNgLS1kMTZzczU0YF80NTA1MGBjLS01M2A6Yw%3D%3D&vl=&vr="
            ,21.9,220,325
        ),
        new addPost(
            "https://p77-sign-va-lite.tiktokcdn.com/tos-maliva-avt-0068/a288df68a38b87e4f7bebc8308c940ae~c5_100x100.jpeg?x-expires=1626454800&x-signature=imk3UK8glhlqRPqOcFIxD5gozHs%3D",
            "booked_up",
            false,
            "Kerrie💀",
            "H2-hoe #booktok #books #tbr #smuttok #bookedup #smutbooks",
            "original sound - kathryn",
            "https://v39-eu.tiktokcdn.com/3e7ea9b968637c8baa92eb75338a3794/60f0c8b1/video/tos/alisg/tos-alisg-pve-0037c001/56956f19f5074549bd3814f43fb73090/?a=1233&br=3998&bt=1999&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.UxE7U_4ka&l=2021071517454601019021820142246962&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anV2OHY7dm42NjMzODczNEApOjNoN2c1ZTs4NzdpNTlkZmdrYGptXzA2NjZgLS1kMS1zczFiYV5hLy0yL18wY2FgMTU6Yw%3D%3D&vl=&vr=",
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