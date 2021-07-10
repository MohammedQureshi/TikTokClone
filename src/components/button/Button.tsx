import React, { MouseEventHandler } from 'react'

interface ButtonProps {
    type: string,
    event: MouseEventHandler<HTMLButtonElement>
 }

function Button(props: ButtonProps){
    return <button className={props.type} onClick={props.event}>Button</button>;
}


export default Button