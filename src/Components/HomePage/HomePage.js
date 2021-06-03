import React, { Component } from 'react';
import { trendingMovies } from '../../api/api';
import MovieList from '../MovieList/MovieList';

class HomePage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    trendingMovies().then(({ results }) => this.setState({ data: results }));
  }

  render() {
    return <MovieList data={this.state.data} />;
  }
}

export default HomePage;
