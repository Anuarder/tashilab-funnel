import axios from 'axios';
import { env } from '~shared/config';

import { createApiClient } from './api';

export { getQuizAnswers, quizAnswers } from './quiz-answers';

export const api = createApiClient(axios, {
  baseURL: env.API_URL,
});
