import { createBrowserRouter } from 'react-router-dom';
import { CreatePlanPage } from '~/pages/create-plan';
import { EmailPage } from '~/pages/email';
import { LegalPage } from '~/pages/legal';
import { MainPage } from '~/pages/main';
import { QuizPage } from '~/pages/quiz';
import { ROUTES } from '~shared/config';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT.pattern,
    Component: MainPage,
  },
  {
    path: ROUTES.QUIZ.pattern,
    Component: QuizPage,
  },
  {
    path: ROUTES.LEGAL.pattern,
    Component: LegalPage,
  },
  {
    path: ROUTES.EMAIL.pattern,
    Component: EmailPage,
  },
  {
    path: ROUTES.CREATE_PLAN.pattern,
    Component: CreatePlanPage,
  },
]);
