import React, { Component } from 'react';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
