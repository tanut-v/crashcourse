import React, { Component, Fragment } from 'react';

export default class UserList extends Component {
  state = {
    data: []
  }
   componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }
   render() {
    return (
      <Layout>
        {
          this.state.data.map(data =>
            <div key={data.id}>
              <ul>
                <li>{ data.name }</li>
              </ul>
            </div>
          )
        }
      </Layout>
    )
  }
}

