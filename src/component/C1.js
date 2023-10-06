import { Component } from "react";

class C1 extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "Engineer", name: "", bool: true };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Props Value - {this.props.brand}</h1>
        <h1>State Value - {this.state.role}</h1>
        <button
          onClick={() => {
            this.setState({ role: "Doctor" });
          }}
        >
          Click
        </button>
        <input onChange={this.handleChange} placeholder="Enter your name " />
        <h1>Your name is : {this.state.name}</h1>

        <button
          onClick={() => {
            this.setState({ bool: !this.state.bool });
          }}
        >
          Singal
        </button>
        {this.state.bool ? (
          <h1 style={{ color: "green" }}>Go</h1>
        ) : (
          <h1 style={{ color: "red" }}>Stop</h1>
        )}
      </div>
    );
  }
}
export default C1;
