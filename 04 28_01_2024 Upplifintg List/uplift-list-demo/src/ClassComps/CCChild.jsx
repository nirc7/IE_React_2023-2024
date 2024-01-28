import { Component } from "react";

import PropTypes from 'prop-types'; 

export default class CCChild extends Component {
  constructor(props) {
    super(props);

    this.list = ["avi", "benny", "charlie"];
  }


  send2P = () => {
    this.props.sendData2Parent(7);
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {


    let listStr = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index + ": hello " + name + "!"}</a>
    );

    console.log('redner');
    return (
      <>
        child <br />
        <button onClick={this.send2P} >send2p</button>

        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "80%" }}>{listStr}</div>

      name={this.props.name} <br />
      bunus= {this.props.bonus} <br />
      </>
    );
  }
}

CCChild.propTypes = {
  name: PropTypes.string.isRequired,
  bonus:PropTypes.number.isRequired
  };