import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from '../primitives/Heading';

export default function Intro({ close }) {
  return (
    <div>
      <H1>Pink text from styled components</H1>
      <p>Welcome to the intro page</p>
      <button onClick={() => close()}>
        Start the magic{' '}
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </button>
    </div>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
