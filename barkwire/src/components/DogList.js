import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Dog from './Dog';

const DogList = ({ dogs }) => (
  <ul className="dogs">
    {
      dogs.map(dog => (
        <li key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>
            <Dog dog={dog} />
          </Link>
        </li>
      ))
    }
  </ul>
);

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageCaption: PropTypes.string.isRequired,
  })).isRequired
};

export default DogList
