import ImageHero from "../../assets/images/avenger.png";

class HeaderJumbotron extends HTMLElement {

    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;
        this.action = this.getAttribute("action") || null;

        this.innerHTML = `
        <style>
            .jumbotron {
                background-color: #black;
                font-family: arial;
                margin-bottom: 1.5rem;
            }

            .jumbotron h1 {
                width: 220px;
                color: $black;
                font-size: 3rem;
                font-weight: 600;
            }

            .jumbotron p {
                width: 220px;
                color: #5f5d5d;
                font-size: 0.9rem;
            }

            .jumbotron .btn {
                font-weight: bold;
            }

            .jumbotron .btn:hover {
                opacity: 0.8;
            }
        </style>
        <div data-aos="zoom-in">
            <div class="jumbotron pt-3 pb-0">
                <div class="row">
                    <div class="col-5 m-md-auto m-lg-auto p-sm-4">
                        <h1>${this.title}</h1>
                        <p class="d-sm-none d-lg-block">${this.description}</p>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <img src="${ImageHero}" alt="${this.title}">
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("header-jumbotron", HeaderJumbotron);
