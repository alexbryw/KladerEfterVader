import React, {CSSProperties} from 'react';

interface Props {
    id:string
}

export default function NavItem(props:Props) {

    return (
        <div style = {navItemStyle}>
            {props.id}
        </div>
    );
}

const navItemStyle: CSSProperties = {
    padding: '1rem 2rem',
    border: '1px solid black',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1
}