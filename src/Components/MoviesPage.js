import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({ value: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <>
        <form action="submit" onSubmit={this.onSubmit}>
          <label htmlFor="search">
            Search movie:
            <input type="text" name="search" onChange={this.onChange} />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.props.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
