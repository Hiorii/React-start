import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const FAQ = () => {
  return (
    <Container>
      <Hero titleText={faqContent.title} image={faqContent.image} />
      <h2>{faqContent.header}</h2>
      <p>{faqContent.text}</p>
    </Container>
  );
};

export default FAQ;