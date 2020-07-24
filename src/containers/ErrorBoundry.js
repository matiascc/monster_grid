import React from 'react'

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            info: '',
            error: ''
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
        this.setState({ error: error })
        this.setState({ info: info })
    }

    render(){
        if (this.state.hasError){
            return(
                <div>
                    <h1>That is not good.</h1>
                    <h2>Error: {this.state.error}</h2>
                    <p>{this.state.info}</p>
                </div>
            ); 
        }
        return this.props.children
    }
}

export default ErrorBoundry