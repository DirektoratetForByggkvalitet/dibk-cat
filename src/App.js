import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard } from 'dibk-wizard-framework';
import store from './store';
// import cat from './api/cat';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      json: '',
    };
  }
  componentDidMount() {
    /* eslint-disable */
    fetch('https://oracle-ea1f3.firebaseio.com/trees/-KqweqqKlwN3_3CRlbct.json')
      /* eslint-enable */
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      })
      .then((json) => {
        this.setState({
          loading: false,
          json,
        });
      })
      .catch((error) => {
        console.log(error); /* eslint no-console: 0*/
      });
  }
  render() {
    if (!this.state.loading) {
      return (
        <Provider store={store}>
          <Wizard wizard={this.state.json} />
        </Provider>
      );
    }
    return <p>Loading...</p>;
  }
}
