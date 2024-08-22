import { Button } from "./components/Button.js";

customElements.define("custom-button", Button);

const btnSaveChanges = document.getElementById("btnSaveChanges");

btnSaveChanges.addEventListener("click", () => {
    alert("Atma işte zehirli bu ok.");
});