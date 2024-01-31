/*Importazione di Bootstrap*/
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";

/* Import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* Import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Import specific icons */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* Add icons to the library */
library.add(
  faCartShopping,
  faAmazon,
  faApple,
  faArrowLeft,
  faArrowRight,
  faCopyright,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube
);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
