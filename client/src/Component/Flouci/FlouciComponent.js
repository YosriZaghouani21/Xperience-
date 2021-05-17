import React from 'react';
import {Helmet} from 'react-helmet';

export default class FlouciComponent extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <h1>Flouci API integration</h1>
        </Helmet>
        <head>
          <title>My FlouciComponent</title>
          <meta name="description" content="Nested component" />
        </head>
        <body>
          <form />
        </body>
      </div>
    );
  }
}
