import React from 'react';
import PropTypes from 'prop-types';
import { Primitives } from 'dibk-wizard-framework';

export default function Intro({ close }) {
  return (
    <div>
      <Primitives.Heading.H1>Pink text from styled components</Primitives.Heading.H1>
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
