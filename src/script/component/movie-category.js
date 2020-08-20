import DataCategories from '../data/data-categories.json';

class MovieCategory extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <style>
          .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #000000 !important;
            border-color: #000000 !important;
          }

          .custom-checkbox
            .custom-control-input:checked:focus
            ~ .custom-control-label::before {
            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
          }

          .custom-checkbox .custom-control-input:focus ~ .custom-control-label::before {
            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
          }

          .custom-checkbox .custom-checkbox-input:active ~ .custom-control-label::before {
            background-color: rgb(32, 32, 32);
          }
        </style>`;

    let htmlContent = '';

    // Categories
    DataCategories.genres.map((category, index1) => {
      // Item Category
      htmlContent += '<ul class="navbar-nav mr-auto">';
      htmlContent += `
            <li class="nav-sidebar-item">
              ${category.name}
              <div class="custom-checkbox float-right">
                <input class="custom-control-input" type="checkbox" data-item="${category.name}" id="checkbox-${index1}">
                <label class="custom-control-label" for="checkbox-${index1}"></label>
              </div>
            </li>`;
      htmlContent += '</ul>';
    });

    this.innerHTML += htmlContent;
  }
}

customElements.define("movie-category", MovieCategory);
