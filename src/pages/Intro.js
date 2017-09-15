import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from '../primitives/Heading';
import { Primitives } from 'dibk-wizard-framework';

export default function Intro({ close }) {
  return (
    <div>
      <H1>Pink text from styled components</H1>
      <p>Welcome to the intro page</p>
      <Primitives.Button onClick={() => close()}>
        Start the magic{' '}
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </Primitives.Button>
    </div>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
