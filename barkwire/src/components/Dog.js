import React from 'react';

const Dog = ({ dog }) => (
  <section className="dog-listing">
    <h3 className="name">{dog.name}</h3>
    <section>
      <figure>
        <img src={dog.imageUrl} alt={dog.name} />
        <figcaption>{dog.imageCaption}</figcaption>
      </figure>
      <p>{dog.description}</p>
    </section>
  </section>
);

export default Dog;
