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
            return <h1>User, we have a problem</h1>
        }

        return this.props.children;
    }
}