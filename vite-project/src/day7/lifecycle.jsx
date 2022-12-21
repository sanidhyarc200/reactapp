import { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("1: Contructor running");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2 getDerivedStateFromProps running");
    return null;
  }

  componentDidMount() {
    console.log("4: componentDidMount running");
  }

  render() {
    console.log("3: Render Method");
    return (
      <>
        <p>This is a class component {this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

export default LifeCycleExample;
