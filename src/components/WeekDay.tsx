import React from 'react';

interface Props {
  text: number
}

export default class WeekDay extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }
    render() {
      return (
          <div>
            <li>{this.props.text}</li>
          </div>
      );
  }
}
