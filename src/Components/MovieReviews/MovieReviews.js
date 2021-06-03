import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { movieReviews } from '../../api/api';

class MovieReviews extends Component {
  static propTypes = {
    movieId: PropTypes.any.isRequired,
  };
  state = {
    reviews: [],
  };

  async componentDidMount() {
    await movieReviews(this.props.movieId)
      .then(({ data }) => data.results)
      .then(res => this.setState({ reviews: res }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {!!reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {`${review.author}`}</h2>
              <p>{`${review.content}`}</p>
            </li>
          ))
        ) : (
          <h2>No reviews yet</h2>
        )}
      </ul>
    );
  }
}

export default MovieReviews;
