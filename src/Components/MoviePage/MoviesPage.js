import React, { Component } from 'react';
import { searchMovie } from '../../api/api';
import MovieList from '../MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    data: [],
    query: '',
  };

  componentDidUpdate() {}

  onChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };

  onSubmit = e => {
    e.preventDefault();

    !!this.state.query.length &&
      searchMovie(this.state.query).then(({ results }) => {
        this.setState({ data: results });
        return results;
      });
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
          <MovieList data={this.state.data} />
        </ul>
      </>
    );
  }
}

export default MoviesPage;
