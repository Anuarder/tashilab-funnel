import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '~/pages/home';
import { QuizPage } from '~/pages/quiz';
import { ROUTES } from '~shared/config';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT().pattern,
    Component: HomePage,
  },
  {
    path: ROUTES.QUIZ().pattern,
    Component: QuizPage,
  },
]);
