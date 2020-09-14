import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import propTypes from 'prop-types';
import { infoContents, listData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={ infoContents.title } image={ listData.image } />
    <h2>{ infoContents.subtitle }</h2>
    <p>{ infoContents.text }</p>
  </Container>
);

Info.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
};

export default Info;