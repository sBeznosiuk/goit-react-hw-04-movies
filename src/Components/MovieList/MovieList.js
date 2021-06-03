import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MovieList = ({ data, location }) => (
  <ul>
    {data.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `movies/${item.id}`,
            state: { from: location },
          }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  location: PropTypes.any,
};

export default withRouter(MovieList);
