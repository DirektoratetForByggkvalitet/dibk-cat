import React from 'react';
import { Provider } from 'react-redux';

import { Wizard } from 'dibk-wizard-framework';
import store from './store';
import cat from './api/cat';

export default function App() {
  return (
    <Provider store={store}>
      <Wizard wizard={cat} />
    </Provider>
  );
}
