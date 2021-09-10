import React from 'react'
import './Video.scss'

export interface VideoProps {
    src: string;
    likes: number;
    comments: number;
    shares: number;
}

function Video(videoProps: VideoProps){
    return (
        <div className="video-container">
            <div className="video">
                <video width="100%" height="100%" controls>
                    <source src={videoProps.src} type="video/mp4" />
                </video>
            </div>
            <div className="action-buttons">
                <i className="fas fa-heart" />
                <p>{videoProps.likes}</p>
                <i className="fas fa-comment-dots" />
                <p>{videoProps.comments}</p>
                <i className="fas fa-share" />
                <p>{videoProps.shares}</p>
            </div>
        </div>
    )
}

export default Video