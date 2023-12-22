import React from 'react';

class ErrorBoundary extends React.Component
{
    state={
        HasError:false
    }

    static getDerivedStateFromError(error)
    {
        return{
            HasError : true
        }
    }
        render(){
            if(this.state.HasError===true)
            {
                return<h1>Something went wrong</h1>
            }
            return this.props.children
        }

    }
    export default ErrorBoundary;
