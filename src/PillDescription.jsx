import React, { Component } from 'react';

class PillDescription extends Component {
  renderTimes() {
    if(this.props.item.time === '0000') {
      return (<div>{this.props.item.dosage} as needed</div>);
    } else {
      return (<div>{this.props.item.dosage} @ {this.props.item.time}</div>);
    }
  }

  render() {
    return (
      <div id="pilldescription">
        <img id='pillimage' src={require('./assets/'+this.props.item.img)} alt = {this.props.item.imgdescription}></img>
        <p>{this.props.item.description} </p>
        <h3>{this.renderTimes()}</h3>
    </div>
    )};
}
export default PillDescription
