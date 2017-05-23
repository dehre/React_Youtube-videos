import React, {Component} from "react";

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  state = {
    term: ''
  }
  render(){
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
  )}

  onInputChange (term){
    this.setState({
      term: term
    });
    this.props.onSearchTermChange(term)
  }
}
export default SearchBar;
