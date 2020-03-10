import React, {CSSProperties} from 'react';
import {Link} from 'react-router-dom'

interface Props {
    id:string,
    name: string,
    isDayMode: boolean
}

export default function NavItem(props:Props) {


    let colorOfText = props.isDayMode?({...navItemDayStyle, ...navItemStyle}): ({...navItemNightStyle, ...navItemStyle})
    

    return (
        <Link to = {props.id} style = {colorOfText}>
            {props.name}
        </Link>
    );
}

const navItemDayStyle: CSSProperties = {
    color: 'black',
    backgroundColor: '#b3d9ff',
}

const navItemStyle: CSSProperties = {
    padding: '1rem 0',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    justifyContent: 'center',
    border: '3px solid black',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px'
}

const navItemNightStyle: CSSProperties = {
    color: '#ffffcc',
    backgroundColor: '#000033',
}