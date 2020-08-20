class CardAuthor extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            @import "./node_modules/font-awesome/css/font-awesome.css";
            .card-author {
                margin-top: 10px;
                font-size: 9px;
                color: #525355;
            }

            .card-author .card {
                border: 1px solid #e4e4e4;
                border-radius: 5px;
                margin-bottom: 10px;
                padding: 10px;
            }

            .card-author .card a {
                text-decoration: none;
            }

            .card-author .card a:visited {
                color: #525355;
            }

            .my-3 {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        </style>
        `;
    }
}

customElements.define("card-author", CardAuthor);
