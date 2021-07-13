import { ReactElement } from "react";
import { SideNav } from "../sidenav/SideNav";
import './NavList.scss';

interface NavListItemProps {
    icon?: ReactElement<JSX.IntrinsicElements>,
    text?: string,
    className?: string
}

const Item : React.FC<NavListItemProps> = ({
    icon = null,
    text = "",
    className = undefined
}) => { return <li className={className}>{icon}{text}</li>}    


interface NavListProps {
    className?: string,
    children?: Array<ReactElement<typeof Item>>
}

const Nav : React.FC<NavListProps> = ({
    className = undefined,
    children = new Array<ReactElement<typeof Item>>()
}) => {
    const classNameString = className ? `navlist ${className}` : 'navlist';
    return <ul className={classNameString}>
        { children.map((item: JSX.Element) => item) }
    </ul>
}

export const NavList = {
    Nav,
    Item
}

export default NavList;
