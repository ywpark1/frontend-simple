import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    fetch("http://localhost:4000/v1/movies")
      .then((res) => {
        if (res.status !== "200") {
          let err = Error;
          err.message = "Invalid response code: " + res.status;
          this.setState({ error: err });
        }
        return res.json();
      })
      .then((json) => {
        this.setState(
          {
            movies: json.movies,
            isLoaded: true,
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
      });
  }

  render() {
    const { movies, isLoaded, error } = this.state;

    if (error) {
      return <div>Error: {error.message} </div>;
    }

    if (!isLoaded) {
      return <p>Loading...</p>;
    }

    return (
      <Fragment>
        <h2>Choose a Movie</h2>

        <div className="list-group">
          {movies.map((m) => (
            <Link
              key={m.id}
              to={`/movies/${m.id}`}
              className="list-group-item list-group-item-action"
            >
              {m.title}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}
