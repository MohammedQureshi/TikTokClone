import { ReactElement } from "react";

interface NavListProps {
    icon?: ReactElement<JSX.IntrinsicElements>,
    text?: string
}

export const NavListItem : React.FC<NavListProps> = ({
    icon = null,
    text = ""
}) => { return <li>{icon}{text}</li>}

export default NavListItem;