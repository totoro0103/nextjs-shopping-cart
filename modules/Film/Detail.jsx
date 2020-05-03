import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const film = useSelector((state) => state.film.detail);
  return (
    <div>
      <h2>{film.title}</h2>
      <h4>Director: {film.director}</h4>
      <br />
      <p>{film.description}</p>
    </div>
  );
};

export default Detail;
