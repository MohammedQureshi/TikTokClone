import React, { MouseEventHandler } from 'react'
import './Button.scss'

export enum ButtonType {
    FILLED = "filled", 
    OUTLINED = "outlined",
    NORMAL = "normal"
}

interface ButtonProps {
    type?: ButtonType,
    text: string,
    event?: MouseEventHandler<HTMLButtonElement>
 }

function Button(props:ButtonProps) {
    return <div className="TikTok-Button"><button className={props.type} onClick={props.event}>{props.text}</button></div>;
}

Button.defaultProps = {
    event: () => void(0),
    type: ButtonType.NORMAL
}


export default Button