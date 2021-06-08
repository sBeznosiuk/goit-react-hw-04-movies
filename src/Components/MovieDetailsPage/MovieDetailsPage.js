import PropTypes from 'prop-types';
import React, { Component, Suspense, lazy } from 'react';
import { movieDetails } from '../../api/api';
import { Link, Route } from 'react-router-dom';
// import MovieCast from './MovieCast';
// import MovieReviews from './MovieReviews';
import routes from '../../routes';

const MovieCast = lazy(() =>
  import('../MovieCast/MovieCast' /* webpackChunkName: 'MovieCast' */),
);
const MovieReviews = lazy(() =>
  import('../MovieReviews/MovieReviews' /* webpackChunkName: 'MovieReviews' */),
);

class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.any,
      }),
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.any,
      }),
      path: PropTypes.any,
      url: PropTypes.any,
    }),
  };

  state = {
    film: {},
    path: this.props.location?.state?.from,
  };

  async componentDidMount() {
    await movieDetails(this.props.match.params.movieId)
      .then(res => this.setState({ film: res }))
      .then(console.log(this.state.film));
  }

  handleGoBack = () => {
    this.props.history.push(this.state.path ?? routes.movies);
  };

  render() {
    const { film } = this.state;

    return (
      <>
        <section>
          <button className="Button" type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          <ul className="ImageGallery">
            {film.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                alt=""
                width="250"
              />
            )}
            <ul style={{ listStyle: 'none' }}>
              <li>
                <h2>{film.title}</h2>
                <p>{film.vote_average}</p>
              </li>
              <li>
                <h2>Overview</h2>
                <p>{film.overview}</p>
              </li>
              <li>
                <h2>Genres</h2>
                <p>
                  {film.genres &&
                    film.genres.map(genre => genre.name).join(', ')}
                </p>
              </li>
            </ul>
          </ul>
        </section>
        <section>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${this.props.match.url}${routes.cast}`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}${routes.reviews}`}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense>
            <Route
              path={`${this.props.match.path}${routes.cast}`}
              render={props => <MovieCast {...props} movieId={film.id} />}
            />
            <Route
              path={`${this.props.match.path}${routes.reviews}`}
              render={props => <MovieReviews {...props} movieId={film.id} />}
            />
          </Suspense>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
