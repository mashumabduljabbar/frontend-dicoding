import '../component/movie-category.js';
import '../component/movie-list.js';
import '../component/search-bar.js';
import "../component/dropdown-sort.js";

import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const clearFilterElement = document.querySelector("#clearFilter");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        searchMovie(searchElement.value);
    };

    const searchMovie = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchMovie(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        loaderElement.style.display = 'none';
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        movieListElement.renderError(message);
    };

    // Default List Movie
    searchMovie('marvel');

    // Search Movie
    searchElement.clickEvent = onButtonSearchClicked;

    // Filter Categories
    const checkbox = document.querySelectorAll("input[type=checkbox]")
    checkbox.forEach(item => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-item");
            searchMovie(category);
        });
    })

    // Clear Filter Categories
    clearFilterElement.addEventListener("click", function () {
        const checkbox = document.querySelectorAll("input[type=checkbox]")
        checkbox.forEach(item => {
            item.checked = false;
        })
    });
};

export default main;
