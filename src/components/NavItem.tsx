import React from 'react';

interface Props {
    id:string
}

export default function NavItem(props:Props) {

    return (
        <li>
            {props.id}
        </li>
    );
}