import { defineCustomElement } from "vue";

import CustomButton from "./CustomButton.vue";

const CustomButtonCE = defineCustomElement(CustomButton, { shadowRoot: false });

customElements.define("custom-button", CustomButtonCE);

export { CustomButtonCE };
