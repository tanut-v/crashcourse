import React, { Component, Fragment } from 'react'

import User from './user'

class Post extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return (
      <Fragment>
        {
          this.state.data.map(data =>
            <div key={data.id}>
              <ul>
                <li>id: { data.id }</li>
                <User userId={data.userId}/>
                <li>title: { data.title }</li>
                <li>body: { data.body }</li>
              </ul>
            </div>
          )
        }
      </Fragment>
    )
  }
}

export default Post
