import React from 'react';

interface Props{
}

interface State{
    hasError:boolean;
}

export default class ErrorBoundary extends React.Component <Props, State> {
    constructor(props:Props){
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(){
        return {hasError: true };
    }

    render() {
        
        if (this.state.hasError){
            return (
                <div>
                    <img src={require(`../asset/images/weatherSloths/confusedSloth.png`)} alt="Confused Sloth"/>
                    <h1>User, we have a problem</h1>
                </div>
            )
        }

        return this.props.children;
    }
}