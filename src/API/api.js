import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"d03845c404baa3661cbd2fe2a42f026a",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () =>api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/{id}`).params.append("append_to_response", "videos"),
    // movieDetail: (id) => api.get(`movie/{id}`, {params: {append_to_response: "videos"}}),
    search: term => api.get("search/movie").params.append("query", encodeURIComponent(term))
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: () => api.get(`tv/{id}`).params.append("append_to_response", "videos"),
    // showDetail: () => api.get(`tv/{id}`, {params: {append_to_response: "videos"}}),
    search: term => api.get("search/tv").params.append("query", encodeURIComponent(term))
}