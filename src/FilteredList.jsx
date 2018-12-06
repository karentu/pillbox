import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      search: "",
      type: "All",
      status: "All",
      sort: "Alphabetical"
    };
  }

  sortBy = (a, b) => {
    if (this.state.sort === "Time") {
      return a.time-b.time;
    } else {
      return a.name.localeCompare(b.name);
    }
  }

  sortSelected = (key, event) => {
    if (this.state.sort === "Alphabetical") {
      this.setState({sort: "Time"})
    } else {
      this.setState({sort: "Alphabetical"});
    }
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }

  // Filter the list of displayed medications as user toggles
  filterItem = (item) => {
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
        <input id= "searchBar" type="text" placeholder="Search" onChange={this.onSearch} />
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
        <Button className="button" bsStyle="success" onClick={this.sortSelected}>Sort by Time</Button>
      <List items={this.props.items.sort(this.sortBy).filter(this.filterItem)} />
      </div>
    );
  }
}
export default FilteredList;
