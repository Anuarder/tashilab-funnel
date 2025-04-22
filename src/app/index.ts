import { createApp } from 'vue';

import App from './App.vue';
import './css/tailwind.css';
import { withAutoAnimate } from './providers/with-auto-animate';
import { withPinia } from './providers/with-pinia';
import { withRouter } from './providers/with-router';
import { withVhOptimizer } from './providers/with-vh-optimizer';

const app = createApp(App);

withVhOptimizer();
withRouter(app);
withAutoAnimate(app);
withPinia(app);

app.mount('#app');
