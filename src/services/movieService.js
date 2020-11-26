// backend service for movies

import http from "./httpService";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/movies`;

function movieUrl(_id) {
  return `${apiEndpoint}/${_id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(_id) {
  return http.delete(movieUrl(_id));
}

export function getMovie(_id) {
  return http.get(movieUrl(_id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    http.put(movieUrl(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}
