import { Component } from "react";

export default class CCCalc extends Component {
  constructor(props) {
    super(props);

    this.state = { res: 0 };
  }

  btnPlus = () => {
    this.setState({ res: this.state.num1 + this.state.num2 });
  }

  chgNum1 = (koldvar) => {
    this.setState({ num1: parseInt(koldvar.target.value) });
  }

  chgNum2 = (koldvar) => {
    this.setState({ num2: Number(koldvar.target.value) });
  }
  render() {
    return (
      <div style={{
        border: 'solid orange 2px',
        margin: 20, padding: 15
      }}>
        num1: <input type="text" onChange={this.chgNum1} />  <br />
        num2: <input type="text" onChange={this.chgNum2} />  <br /> <br />
        <button onClick={this.btnPlus}>+</button> <br />
        res={this.state.res}
      </div>
    );
  }
}