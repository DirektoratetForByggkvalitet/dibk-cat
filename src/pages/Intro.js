import React from 'react';
import PropTypes from 'prop-types';

export default function Intro({ close }) {
  return (
    <div>
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
