import React, { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError(error) {
  
    return { hasError: true };
  }


  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
   
  }

  render() {
    if (this.state.hasError) {
    
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }
 
    return this.props.children;
  }
}


class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }


  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.counter === 5) {
      throw new Error('Error: Counter reached 5');
    }
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <ExampleComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
