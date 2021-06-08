import React, { Component } from 'react';
import { searchMovie } from '../../api/api';
import MovieList from '../MovieList/MovieList';
import { withRouter } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    data: [],
    query: '',
  };

  componentDidMount() {
    if (this.props.location.search.slice(7) !== this.state.query) {
      searchMovie(this.props.location.search.slice(7)).then(({ results }) => {
        this.setState({ data: results });
        return results;
      });
    }
  }

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

    this.props.history.push({
      search: `?query=${this.state.query}`,
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

export default withRouter(MoviesPage);
