import React, { MouseEventHandler } from 'react'
import './Button.scss'

interface ButtonProps {
    type: string,
    text: string,
    event: MouseEventHandler<HTMLButtonElement>
 }

function Button(props: ButtonProps){
    return <div className="TikTok-Button"><button className={props.type} onClick={props.event}>{props.text}</button></div>;
}


export default Button