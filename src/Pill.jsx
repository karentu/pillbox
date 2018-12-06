import React, { Component } from 'react';
import {Panel, PanelGroup} from 'react-bootstrap';

class Pill extends Component {
  render() {
    return ( <div key={this.props.item.name} className="pill">
                <div className="panel">
                  <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                      <Panel.Title toggle>
                        {this.props.item.name}
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                       {this.props.item.description}
                     </Panel.Body>
                   </Panel.Collapse>
                 </Panel>
                </div>
              </div>
      )
  }
}
export default Pill;
