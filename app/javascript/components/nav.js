import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        My App
        <a href={this.props.posts_url}>Posts</a>
        <a href={this.props.users_url}>Users</a>
      </div>
    );
  }
}
