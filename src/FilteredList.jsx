import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      search: "",
      type: "All"
    };
  }
// Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }
  filterItem = (item) => {
      // Checks if the current search term is contained in this item
      // TODO: add condition to check item's type
      if (item.type === this.state.type || this.state.type === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1;
      }
  }

  selectDropdown = (eventKey) => {
       this.setState({
           type: eventKey
       })
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Pillbox</h1>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <DropdownButton id="typeDropdown" title={"Type"}>
            <MenuItem eventKey="All" onSelect={this.selectDropdown}>All</MenuItem>
            <MenuItem eventKey="Prescription" onSelect={this.selectDropdown}>Prescription</MenuItem>
            <MenuItem eventKey="OTC" onSelect={this.selectDropdown}>Over-The-Counter</MenuItem>
        </DropdownButton>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}
export default FilteredList;
