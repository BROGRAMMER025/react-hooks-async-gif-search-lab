import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a Giphy search term:
          <input
            type="text"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
