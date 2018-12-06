import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      search: "",
      type: "All",
      status: "All"
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }

  filterItem = (item) => {
    console.log(this.state.status);
      if (item.type === this.state.type || this.state.type === "All") {
        if ((item.usage === this.state.status) || this.state.status === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1;
        }
      }
  }

  selectType = (eventKey) => {
       this.setState({
           type: eventKey
       })
  }

  selectDropdown = (eventKey) => {
       this.setState({
           status: eventKey
       })
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Pillbox</h1>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <DropdownButton id="typeDropdown" title={"Type"}>
            <MenuItem eventKey="All" onSelect={this.selectType}>All</MenuItem>
            <MenuItem eventKey="Prescription" onSelect={this.selectType}>Prescription</MenuItem>
            <MenuItem eventKey="OTC" onSelect={this.selectType}>Over-The-Counter</MenuItem>
        </DropdownButton>
        <DropdownButton id="typeDropdown" title={"Status"}>
            <MenuItem eventKey="All" onSelect={this.selectDropdown}>All</MenuItem>
            <MenuItem eventKey="ongoing" onSelect={this.selectDropdown}>Active</MenuItem>
            <MenuItem eventKey="asneeded" onSelect={this.selectDropdown}>Past</MenuItem>
        </DropdownButton>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}
export default FilteredList;
