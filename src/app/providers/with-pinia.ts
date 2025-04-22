import { createPinia } from 'pinia';
import type { App } from 'vue';

const pinia = createPinia();

export function withPinia(app: App) {
  app.use(pinia);
}
