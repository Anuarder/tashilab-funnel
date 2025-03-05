/**
 * @description it is necessary for the consistency of routes
 *
 * @returns
 *  patter - route url pattern, required to create the routes
 *  path - converted url with the passed parameters
 * */

export const ROUTES = {
  ROOT: {
    pattern: '/',
    path: () => '/',
  },
  QUIZ: {
    pattern: '/quiz/:slug',
    path: (slug: string) => `/quiz/${slug}`,
  },
  EMAIL: {
    pattern: '/email',
    path: () => '/email',
  },
  CREATE_PLAN: {
    pattern: '/create-plan',
    path: () => '/create-plan',
  },
  LEGAL: {
    pattern: '/legal/:slug',
    path: (slug: string) => `/legal/${slug}`,
  },
};
