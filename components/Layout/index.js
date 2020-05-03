import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StyledContent = styled.div`
  background: #fff;
  min-height: 80vh;
  padding: 16px;
  margin-top: 50px;
`;
export default ({ children, title = 'Shopping Cart' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </div>
);
