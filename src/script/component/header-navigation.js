import BrandIcon from "../../assets/images/favicon.png";

class HeaderNavigation extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .brand-icon {
                width: 48px;
                border-radius: 15px;
            }

            .navbar .navbar-brand {
                font-family: "Fira Sans Condensed", sans-serif;
                font-size: 2rem;
                margin-right: 8rem;
            }

            .navbar .nav-item {
                margin-left: 2rem;
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }

            .navbar-nav  .nav-sidebar-item {
                font-family: "Open Sans", sans-serif;
                font-size: 0.8rem;
                margin-top: 0.5rem;
            }
        </style>
        <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${BrandIcon}" class="brand-icon"> Box-Office
                </a>
            </nav>
        </header>`;
    }
}

customElements.define("header-navigation", HeaderNavigation);
