import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider } from 'losen';

import store from './store';
import cat from './api/cat.json';
import Intro from './pages/Intro';

import dataExport from './exports/data-export';

export default class App extends Component {
  static propTypes = {
    translations: PropTypes.object,
  };

  static defaultProps = {
    translations: {},
  };

  state = { intro: true };

  closeIntro = () => this.setState({ intro: false });

  render() {
    if (this.state.intro) {
      return (
        <StyleProvider>
          <Intro close={this.closeIntro} />
        </StyleProvider>
      );
    }

    return (
      <Provider store={store}>
        <Wizard wizard={cat} translations={this.props.translations} exports={{ dataExport }} />
      </Provider>
    );
  }
}
