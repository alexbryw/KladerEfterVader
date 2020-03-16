import React, {CSSProperties} from 'react'

interface Props{
    windDeg: number
    isDayMode: boolean
}

export default function WindDirection(props:Props){

    const rotateStyle : React.CSSProperties = {
        transform : "rotate("+(props.windDeg + 180)+"deg)"
    }
    let windArrowUrl: string
    if(props.isDayMode) {
        windArrowUrl = require('../asset/images/weatherIcons/arrow.png')
    } else{
        windArrowUrl = require('../asset/images/weatherIcons/NightMode/arrow.png')
    }
    return(
        <div>
            <img src={windArrowUrl} alt="A wind arrow" style={ {...rotateStyle, ...arrowStyle}}/>
        </div>
    )
}

const arrowStyle:CSSProperties = {
    height: '2.5rem',
    padding: '0.5rem'
}