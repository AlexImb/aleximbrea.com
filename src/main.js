import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faGithub,
  faProductHunt,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

library.add(faLinkedin, faGithub, faProductHunt, faTwitter, faFacebook);
app.component('Icon', FontAwesomeIcon);

app.mount('#app');
