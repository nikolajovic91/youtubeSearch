import React, { Component } from "react";

class SearchBar extends Component {
  state = { text: "" };

  onInputChange = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.text);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{marginTop:'15px'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
