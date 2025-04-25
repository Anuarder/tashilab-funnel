import { createApp } from 'vue';

import App from './App.vue';
import './css/tailwind.css';
import { withAutoAnimate } from './providers/with-auto-animate';
import { withPinia } from './providers/with-pinia';
import { withRouter } from './providers/with-router';

const app = createApp(App);

withRouter(app);
withAutoAnimate(app);
withPinia(app);

app.mount('#app');
