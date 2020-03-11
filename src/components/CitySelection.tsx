import React, {CSSProperties} from 'react';

interface Props{
}

export default class CitySelection extends React.Component<Props, {value:string}> {
    constructor (props:Props){
        super(props);
        this.state = {value: 'Göteborg'};
        this.change = this.change.bind(this);
    }

    change(event:any){
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
                <p>{this.state.value}</p>
                <select id="city" onChange={this.change} value= {this.state.value} name="city" style = {cityInput}>
                <option value="Göteborg">Göteborg</option>
                <option value="Kiruna">Kiruna</option>
                <option value="Ystad">Ystad</option>
            </select>
            </div>
        )
    }
}

const cityInput: CSSProperties = {
    margin: '0 0 2rem 0',
    padding: '0.5rem 1.5rem'
  }
