import { createStore, combineReducers, compose } from 'redux';
import { state } from 'dibk-wizard-framework';
import { persistStore, autoRehydrate } from 'redux-persist';

/**
 * Create the store with middleware
 */
const store = createStore(
  combineReducers({ [state.NAME]: state.reducer }),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    autoRehydrate(),
  ) /* eslint no-undef: 0 */,
);

persistStore(store);

export default store;
