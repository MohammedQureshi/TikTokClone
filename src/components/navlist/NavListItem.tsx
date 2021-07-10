import { ReactElement } from "react";

interface NavListProps {
    icon?: ReactElement<JSX.IntrinsicElements>,
    text?: string,
    className?: string
}

export const NavListItem : React.FC<NavListProps> = ({
    icon = null,
    text = "",
    className = undefined
}) => { return <li className={className}>{icon}{text}</li>}

export default NavListItem;