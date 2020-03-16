import React from 'react'

interface Props{
}

interface State{
    hasError:boolean
}

export default class ErrorBoundary extends React.Component <Props, State> {
    constructor(props:Props){
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(){
        return {hasError: true }
    }

    render() {
        if (this.state.hasError){
            return (
                <div className="ErrorBoundary" style={errorDivStyle}>
                    <img style={errorImgStyle} src={require(`../asset/images/weatherSloths/confusedSloth.png`)} alt="Confused Sloth"/>
                    <h3 style={textStyle}>User, we have a problem</h3>
                </div>
            )
        }
        return this.props.children
    }
}

const errorImgStyle: React.CSSProperties = {
    display: "flex",
    width: "10rem",
    margin: "auto",
    paddingBottom: '1rem'
}

const errorDivStyle: React.CSSProperties = {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%"
}

const textStyle: React.CSSProperties = {
    textAlign: "center"
}