/**
 * @description it is necessary for the consistency of routes
 *
 * @returns
 *  patter - route url pattern, required to create the routes
 *  path - converted url with the passed parameters
 * */

export const ROUTES = {
  ROOT() {
    return {
      pattern: '/',
      path: () => '/',
    };
  },
  QUIZ() {
    return {
      pattern: '/quiz',
      path: () => '/quiz',
    };
  },
};
