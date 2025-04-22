import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { CreatePlanPage } from '~pages/create-plan';
import { EmailPage } from '~pages/email';
import { LegalPage } from '~pages/legal';
import { MainPage } from '~pages/main';
import { PaymentPage } from '~pages/payment';
import { QuizMainPage, QuizPage } from '~pages/quiz';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/quiz/:slug',
      component: QuizMainPage,
      children: [
        {
          path: '',
          name: 'QuizPage',
          component: QuizPage,
        },
      ],
    },
    {
      path: '/create-plan',
      name: 'CreatePlanPage',
      component: CreatePlanPage,
    },
    {
      path: '/email',
      name: 'EmailPage',
      component: EmailPage,
    },
    {
      path: '/payment',
      name: 'PaymentPage',
      component: PaymentPage,
    },
    {
      path: '/legal/:slug',
      name: 'LegalPage',
      component: LegalPage,
    },
  ],
});

export function withRouter(app: App) {
  app.use(router);
}
