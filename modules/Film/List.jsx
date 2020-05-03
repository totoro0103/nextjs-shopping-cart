import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const List = () => {
  const films = useSelector((state) => state.film.list);
  return films.map((film) => (
    <Link key={film.id} href="/film/[id]" as={`/film/${film.id}`}><a><li>{film.title}<br /></li></a></Link>
  ));
};

export default List;
