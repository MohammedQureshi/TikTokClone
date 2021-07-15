import React, { ReactElement } from "react";
import './UserList.scss';

interface AccountProps {
    username: string,
    description: string,
    imageURL: string
    isVerifed?: boolean
}

const Account : React.FC<AccountProps> = ({
    username = "",
    description = "",
    imageURL = "",
    isVerifed = false
}) : ReactElement => {

    const displayVerifed = !isVerifed ? null :  <i className="fas fa-check-circle"></i>;
    return <a className="account" href={`/@${username}`}>
        <span className="user-item-inner">
            <div className="user-avatar">
                <span className="tiktok-avatar">
                    <img alt={description + " TikTok"} src={imageURL}/>
                </span>
            </div>
            <div className="user-info">
                <p className="user-title">
                    <h4>{username}</h4>
                    { displayVerifed }
                </p>
                <p className="user-description"> {description}</p>
            </div>
        </span>
    </a>
}

interface UserListContainerProps {
    children: Array<ReactElement<typeof Account>>
}

const Container : React.FC<UserListContainerProps> = ({
    children = Array()
}) => {
    return <div className="user-list">
        { children.map(child => child) }
    </div>
}

export const UserList = {
    Container,
    Account
}

export default UserList;