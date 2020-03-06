import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom'

interface Props {
    id:string,
    name: string,
    isDayMode: boolean
}

export default function NavItem(props:Props) {


    let colorOfText = props.isDayMode?(navItemDayStyle): (navItemNightStyle)
    

    return (
        <Link to = {props.id} style = {colorOfText}>
            {props.name}
        </Link>
    );
}

const navItemDayStyle: CSSProperties = {
    padding: '1rem 2rem',
    border: '1px solid black',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black'
}

const navItemNightStyle: CSSProperties = {
    padding: '1rem 2rem',
    border: '1px solid white',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    color: '#ffffcc'
}