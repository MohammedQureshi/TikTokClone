import { ReactElement } from "react";
import NavListItem from "./NavListItem";
import './NavList.scss';

interface NavListProps {
    items?: Array<ReactElement<JSX.Element>>
}
export const NavList = ({
    items = new Array<JSX.Element>()
}) => {
    return <ul className={"navlist"}>
        { items.map((item: JSX.Element) => item) }
    </ul>
}