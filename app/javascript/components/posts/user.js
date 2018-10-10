import React, { Component } from 'react'

class User extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return(
      <li>
        user:
        <ul>
          <li>id: {this.state.data.id}</li>
          <li>name: {this.state.data.name}</li>
          <li>userName: {this.state.data.userName}</li>
          <li>email: {this.state.data.email}</li>
        </ul>
      </li>
    )
  }
}

export default User
