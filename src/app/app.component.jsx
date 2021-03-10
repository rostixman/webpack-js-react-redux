import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Routes } from 'app';

class AppComponent extends Component {
  static propTypes = {
    appLaunch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { appLaunch } = this.props;
    appLaunch();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export const modifiedApp = AppComponent;
