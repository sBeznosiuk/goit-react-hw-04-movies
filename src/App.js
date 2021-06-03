import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Header/Navigation';
import Loader from './Components/Loader/Loader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./Components/HomePage/HomePage' /* webpackChunkName: 'HomePage' */),
);
const MoviesPage = lazy(() =>
  import(
    './Components/MoviePage/MoviesPage' /* webpackChunkName: 'MoviesPage' */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'MovieDetailsPage' */
  ),
);
const NotFound = lazy(() =>
  import('./Components/NotFound/NotFound' /* webpackChunkName: 'NotFound' */),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={props => (
                <HomePage
                  {...props}
                  data={this.state.trendingFilms}
                  onClick={this.onClick}
                />
              )}
            />
            <Route
              exact
              path={routes.movies}
              render={props => (
                <MoviesPage {...props} onSubmit={this.onSubmit} />
              )}
            />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
