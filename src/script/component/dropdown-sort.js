class DropdownSort extends HTMLElement {

    connectedCallback() {
        const dropdownItem = document.querySelectorAll(".dropdown-item");
        dropdownItem.forEach(item => {
            item.addEventListener("click", function () {
                document.querySelector("#sort-selected").innerText = this.textContent;
            });
        })
    }
}

customElements.define("dropdown-sort", DropdownSort);
