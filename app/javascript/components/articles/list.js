import React, { Component, Fragment } from 'react';

export default class ArticleList extends Component {
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
                <li>{ data.title }</li>
              </ul>
            </div>
          )
        }
      </Fragment>
    )
  }
}
