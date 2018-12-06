import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class PillDescription extends Component {
  render() {
    return (
      <div id="pilldescription">
        <img id='pillimage' src={require('./assets/'+this.props.item.img)} alt = {"apple"}></img>
        <p>{this.props.item.description} </p>
        <h3>{this.props.item.dosage} @ {this.props.item.time}</h3>
    </div>
    )};
}
export default PillDescription
