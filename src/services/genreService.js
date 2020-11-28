// backend service for genres

import http from "./httpService";

export function getGenres() {
    return http.get(`/genres`);
}