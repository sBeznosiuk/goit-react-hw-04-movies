import React, { Component } from 'react';
import { trendingMovies, searchMovie, movieDetails } from './api/api';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';

class App extends Component {
  state = {
    data: [],
    query: '',
  };

  componentDidMount() {
    trendingMovies().then(({ results }) => this.setState({ data: results }));

    searchMovie('Army of the Dead').then(console.log);
    movieDetails(503736).then(console.log);
  }

  onSubmit = value => {
    this.setState({ query: value });
    console.log(this.state.query);
  };

  render() {
    return (
      <>
        <HomePage data={this.state.data} />
        <MoviesPage data={this.state.data} onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default App;
