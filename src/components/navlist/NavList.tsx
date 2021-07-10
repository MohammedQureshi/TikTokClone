import { ReactElement } from "react";
import NavListItem from "./NavListItem";

interface NavListProps {
    items?: Array<ReactElement<JSX.Element>>
}
export const NavList = ({
    items = new Array<JSX.Element>()
}) => {
    return <ul>
        { items.map((item: JSX.Element) => item) }
    </ul>
}