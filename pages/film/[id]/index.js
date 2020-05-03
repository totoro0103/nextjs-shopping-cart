import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { setFilmDetail } from '../../../modules/Film/actions';
import initialize from '../../../utils/initialize';
import Film from '../../../modules/Film';

const FilmDetailPage = ({ film }) => (
  <div>
    <Head>
      <meta property="og:title" content={film.title} key="title" />
      <meta property="og:image" content="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-images/3eae1430124511e9998b4f55f1592c01.jpg" />
      <meta property="og:description" content={film.description} />
    </Head>
    <Layout>
      <Film.Detail />
    </Layout>
  </div>

);

FilmDetailPage.getInitialProps = async (ctx) => {
  initialize(ctx);
  const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${ctx.query.id}`);
  const film = response.data;
  ctx.store.dispatch(setFilmDetail(film));
  return { film };
};

export default FilmDetailPage;
