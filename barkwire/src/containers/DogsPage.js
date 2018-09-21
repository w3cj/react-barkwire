import React, { Component } from 'react';

import { getDogs } from '../API';
import DogList from '../components/DogList';

class DogsPage extends Component {
  state = {
    dogs: null
  };

  componentDidMount = async () => {
    const { dogs } = await getDogs();
    this.setState({
      dogs
    });
  }

  render() {
    const { dogs } = this.state;
    return dogs
      ? <DogList dogs={dogs} />
      : <h1>Loading...</h1>;
  }
}

export default DogsPage;
