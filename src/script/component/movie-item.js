import "../component/breadcrumb-detail.js";

import IconUtensils from "../../assets/images/utensils.svg";
import DataSource from '../data/data-source.js';

class MovieItem extends HTMLElement {

    set movie(item) {
        this._item = item;
        this.render();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        this.innerHTML = `
        <style>
            .card {
                font-family: "Open Sans", sans-serif;
                cursor: pointer;
                border: 0;
            }

            .card:hover {
                opacity: 0.7;
            }

            .card img.card-img {
                height: 140px;
                object-fit: cover;
                border-radius: 1rem;
            }

            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }

            .card .card-body .card-title {
                font-size: 0.9rem;
            }

            .card .card-body .card-text {
                font-size: 0.7rem;
            }

            .icon-svg {
                width: 11px;
                margin-top: -3px;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-movie" data-id="${this._item.id}">
                    <img src="https://image.tmdb.org/t/p/w500/${this._item.poster_path}" class="card-img card-img-top" alt="${this._item.title}" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.title}</h5>
                        <p class="card-text">
                            <span class="float-left"> Release Date : ${this._item.release_date}</span>
                            <span class="float-right">Vote Average : ${this._item.vote_average} </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;

        // Sequenced Animation
        let delay = 0;
        $('[data-aos]').each(function () {
            if ($(this).is(":visible") == true) {
                delay = delay + 400;
                $(this).attr('data-aos-delay', delay);
            }
        });

        // PreLoader Element
        const loaderElement = document.querySelector("#loader-text");

        // Datasource Infromation Movie
        const informationMovie = async (id) => {
            loaderElement.style.display = 'block';

            try {
                const result = await DataSource.informationMovie(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        // Callback Success
        const renderResult = results => {
            loaderElement.style.display = 'none';

            this.switchPage();

            // Breadcrumb
            const breadcrumbElement = document.querySelector("breadcrumb-detail");
            breadcrumbElement.currentPage = results.title;

            // Image
            $('#detailImage').attr("src", "https://image.tmdb.org/t/p/w500/"+results.backdrop_path);

            // Detail Header
            const detailHeaderElement = document.querySelector("detail-header");
            const dataHeader = {
                'title': (results.title ? results.title : 'NaN'),
                'release_date': (results.release_date ? results.release_date : '-'),
                'vote_average': (results.vote_average ? results.vote_average : 0),
                'overview': (results.overview ? results.overview : '-'),
                'backdrop_path': (results.backdrop_path ? results.c : '-')
            }
            detailHeaderElement.update = dataHeader;

            $(window).scrollTop(0);
        };

        // Callback Failed
        const fallbackResult = message => {
            loaderElement.style.display = 'none';
            alert(message);
        };

        // Card Movie on Click
        const cardRecipe = this.querySelector(".card-movie");
        cardRecipe.addEventListener("click", function () {
            const idMovie = this.getAttribute("data-id");
            informationMovie(idMovie);
        });
    }
}

customElements.define("movie-item", MovieItem);
