import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import PillDescription from './PillDescription';

class Pill extends Component {
  render() {
    return ( <div key={this.props.item.name} className="pill">
                <div className="panel">
                  <Panel id="collapsible-panel-example-2" defaultExpanded bsStyle="info">
                    <Panel.Heading>
                      <Panel.Title toggle>
                        {this.props.item.name} ({this.props.item.tradename})
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                       <PillDescription item={this.props.item}/>
                     </Panel.Body>
                   </Panel.Collapse>
                 </Panel>
                </div>
              </div>
      )
  }
}
export default Pill;
