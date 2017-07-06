import { createStore, combineReducers, compose } from 'redux';
import { state } from 'dibk-wizard-framework';

/**
 * Create the store with middleware
 */
export default createStore(
  combineReducers({ [state.NAME]: state.reducer }),
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f) /* eslint no-undef: 0 */,
);
