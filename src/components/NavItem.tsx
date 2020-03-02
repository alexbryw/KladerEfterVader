import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom'

interface Props {
    id:string
}

export default function NavItem(props:Props) {

    return (
        <Link to = {props.id} style = {navItemStyle}>
            {props.id}
        </Link>
    );
}

const navItemStyle: CSSProperties = {
    padding: '1rem 2rem',
    border: '1px solid black',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black'
}