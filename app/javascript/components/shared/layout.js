import React, { Component, Fragment } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
          {this.props.children}
        <Footer/>
      </Fragment>
    );
  }
}
