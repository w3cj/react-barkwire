import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { getDog } from '../API';
import Dog from '../components/Dog';

export class DogPage extends Component {
  state = {
    dog: null
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const { dog } = await getDog(id);
    this.setState({
      dog
    });
  }
  

  render() {
    const { dog } = this.state;
    return dog
      ? <Dog dog={dog} />
      : <h1>Loading...</h1>;
  }
}

export default DogPage;
