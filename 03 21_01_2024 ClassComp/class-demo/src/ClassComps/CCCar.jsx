import { Component } from "react";


export default class CCCar extends Component {
  constructor(props) {
    super(props);

    this.sp = this.props.speed; //field
    if (150 < this.sp) {
      this.sp += 5;
    }

    this.state = {
      speed: this.props.speed,
      gear: 'auto',
      name: 'no name'
    };

  }

  btnIncS = () => {
    // this.sp += 10;
    // console.log(this.sp);

    //this.state.speed += 10; //err

    //opt1 - no dependancy
    // this.setState({speed : 300});
    console.log('btn', this.state.speed);

    //opt2 dependancy
    this.setState((prevState) => ({
      speed: prevState.speed + 10,
      stam: true
    }));

    // if () {
    //   this.setState({company : 'asdasd'});
    // }
  }

  chgName = (koldvar) => {

    this.setState({ name: koldvar.target.value.toUpperCase() });
  }

  render() {
    console.log('render', this.state.speed);


    return (
      <div style={{
        border: 'solid orange 2px',
        margin: 20, padding: 15
      }}>
        speed= {this.state.speed} <br />
        model={this.props.model} <br />
        color={this.props.color} <br />
        <button onClick={this.btnIncS}>IncS</button> <br />
        name: <input type="text" onChange={this.chgName} /> {this.state.name}
      </div>
    );
  }
}