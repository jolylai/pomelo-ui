import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Icon, Button } from 'pomelo-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <Icon type="user" />
      </div>
    );
  }
}
