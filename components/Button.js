export class Button extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"}); 
    }

    connectedCallback() {
        const icon = this.getAttribute("data-icon");
        const variant = this.getAttribute("data-variant");

        this.shadowRoot.innerHTML = `
        <style>${css}</style>

        <button class="button">
        ${
            (icon && `<ion-icon name="${icon}"></ion-icon>`) || ""
        }
        <span class"label">
        <slot></slot>
        </span>
        </button>
        `;

        if (variant){
            this.shadowRoot.querySelector(".button").classList.add(`variant-${variant}`);
        }
    }
}

const css = `
.button {
    background-color: #4CAF50; /* Yeşil */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #45a049; /* Daha koyu yeşil */
}

.label {
    font-weight: bold;
}

.variant-success {
    background-color: #3cba02;
    color: #ffffff
}

.variant-error {
    background-color: #dd050c;
    color: #ffffff
}
`;