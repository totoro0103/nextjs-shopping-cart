import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Layout from '../components/Layout';
import { setFilms } from '../modules/Film/actions';
import initialize from '../utils/initialize';
import Film from '../modules/Film';

const FilmPage = () => (
  <div>
    <Head>
      <meta property="og:title" content="Ghibli Flims" key="title" />
      <meta property="og:image" content="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-images/3eae1430124511e9998b4f55f1592c01.jpg" />
    </Head>
    <Layout>
      <Film.List />
    </Layout>
  </div>

);

FilmPage.getInitialProps = async (ctx) => {
  initialize(ctx);
  const response = await axios.get('https://ghibliapi.herokuapp.com/films');
  const films = response.data;
  ctx.store.dispatch(setFilms(films));
  return { films };
};

export default FilmPage;
