import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    console.log("Movies Rendered");
    this.setState({
      movies: [
        { id: 1, title: "Inception", runtime: 142 },
        { id: 2, title: "Hello", runtime: 120 },
        { id: 3, title: "Avatar", runtime: 112 },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Choose a Movie</h2>

        <ul>
          {this.state.movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
