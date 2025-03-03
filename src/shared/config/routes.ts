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
  LEGAL: {
    pattern: '/legal/:slug',
    path: (slug: string) => `/legal/${slug}`,
  },
};
