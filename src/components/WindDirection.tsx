import React from 'react';

interface Props{
    windDeg: number
    isDayMode: boolean
    windStyle?: React.CSSProperties
}
interface State{}

export default class WindDirection extends React.Component<Props,State>{
    constructor(props: Props){
        super(props)
        this.state = {}
    }
    render(){
        const rotateStyle : React.CSSProperties = {
            transform : "rotate("+(this.props.windDeg + 180)+"deg)"
        }
        let windArrowUrl: string;
        if(this.props.isDayMode) {
            windArrowUrl = require('../asset/images/weatherIcons/arrow.png');
        } else{
            windArrowUrl = require('../asset/images/weatherIcons/NightMode/arrow.png');
        }
        return(
            <div className="WindDirection">
                <img src={windArrowUrl} alt="A wind arrow" style={ {...this.props.windStyle, ...rotateStyle}}/>
            </div>
        )
    }
}