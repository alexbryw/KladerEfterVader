import React from 'react';
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

    componentDidMount(){
       this.intervalID()
    }

    componentWillUnmount(){
        clearInterval(this.intervalID());
    }

    intervalID(){

        let intervalID = setInterval(
            () => this.tick(), 1000
        )

        return intervalID
    }

    tick(){
        this.setState({
            time: moment().format('LTS')
        })
    } 

    render(){
        return (
        <p>{this.state.time}</p>
        )
    }

}
