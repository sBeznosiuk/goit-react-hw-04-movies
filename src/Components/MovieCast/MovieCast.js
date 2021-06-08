import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { movieCast } from '../../api/api';
import { withRouter } from 'react-router-dom';

class MovieCast extends Component {
  static propTypes = {
    movieId: PropTypes.any.isRequired,
  };

  state = {
    actors: [],
  };

  async componentDidMount() {
    await movieCast(this.props.movieId).then(res => {
      this.setState({ actors: res.cast });
      console.log(res.cast);
    });
  }
  render() {
    const { actors } = this.state;
    return (
      <ul className="ImageGallery">
        {actors.length ? (
          actors.map(actor => (
            <li key={actor.id} className="ImageGalleryItem">
              {actor.profile_path ? (
                <img
                  className=".ImageGalleryItem-image"
                  src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                  alt=""
                  width="100"
                />
              ) : (
                <h2>No image</h2>
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))
        ) : (
          <h2>No information yet</h2>
        )}
      </ul>
    );
  }
}

export default withRouter(MovieCast);
