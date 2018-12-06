import React, { Component } from 'react';

class Pill extends Component {
  render() {
    return ( <div key={this.props.item.name} className="pill">
                <div class="card">
                    <h5 class="card-title">{this.props.item.name}</h5>
                    <p class="card-text">SOME INFO</p>
                    <div class="alert alert-success alert-dismissible">
                      <button type="button" class="close" data-dismiss="alert">×</button>
                      <strong>Success!</strong> This alert box could indicate a successful or positive action.
                    </div>
                </div>
              </div>
      )
  }
}
export default Pill;
