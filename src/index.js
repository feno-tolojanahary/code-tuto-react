import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function HookExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [subscribeCount, setSubscribeCount] = useState(0);

  return (
    <div>
      <p>You click me {count} time</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>subscribe count {subscribeCount} s</p>
      <button onClick={() => setSubscribeCount(subscribeCount + 1)}>
        Change subscribe
      </button>
    </div>
  )
}

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };  
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You click me {this.state.count} time</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(
    <ClassExample />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
