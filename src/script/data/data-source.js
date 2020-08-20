class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a393b3e568f5df5467c5b8e5bddb234&language=en-US&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }

    static informationMovie(id) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a393b3e568f5df5467c5b8e5bddb234&language=en-US`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${id} is not found`)
                }
            })
    }
}

export default DataSource;
