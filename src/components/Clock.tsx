import React, {CSSProperties} from 'react';
import moment from 'moment';

interface Props{

}

interface State {
    time: string
}

export default class Clock extends React.Component<Props, State>{
     constructor(props:Props){
        super(props);
        this.state = {
            time: moment().format('LTS')
        }
    }

    private interval: NodeJS.Timeout | undefined = undefined;

    componentDidMount(){
       this.intervalID()
    }

    componentWillUnmount(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }

    intervalID(){
        this.interval = setInterval(
            () => this.tick(), 1000
        )
    }

    tick(){
        this.setState({
            time: moment().format('LTS')
        })
    } 

    render(){
        return (
        <p style = {clockStyle}>{this.state.time}</p>
        )
    }
}

const clockStyle:CSSProperties = {
    fontSize: '2rem'
}
