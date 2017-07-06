import React from 'react';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import { Wizard } from 'dibk-wizard-framework';

import cat from './api/cat';
import store from './store';

injectGlobal`
  @font-face {
      font-family: 'Altis';
      src: url('altis-light.eot');
      src: url('altis-light.eot?#iefix') format('embedded-opentype'),
           url('altis-light.woff2') format('woff2'),
           url('altis-light.woff') format('woff'),
           url('altis-light.ttf') format('truetype');
      font-weight: light;
      font-style: normal;
  }

  @font-face {
      font-family: 'Altis';
      src: url('altis-medium.eot');
      src: url('altis-medium.eot?#iefix') format('embedded-opentype'),
           url('altis-medium.woff2') format('woff2'),
           url('altis-medium.woff') format('woff'),
           url('altis-medium.ttf') format('truetype');
      font-weight: light;
      font-style: normal;
  }
`;

export default function App() {
  return (
    <Provider store={store}>
      <Wizard
        schema={cat}
        styles={{
          color: {
            primary: 'deeppink',
          },
        }}
      />
    </Provider>
  );
}
