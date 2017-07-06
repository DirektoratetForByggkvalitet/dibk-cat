import React from 'react';
import { Provider } from 'react-redux';

import { Wizard } from 'dibk-wizard-framework';

import cat from './api/cat';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Wizard schema={cat} />
    </Provider>
  );
}
