import { FUNNEL_CONFIG, QUIZ_PAGES_SLUGS } from './funnel-data.ts';
import type { QuizPageContent } from './types.ts';

export function getQuizPageContentBySlug(slug: string): QuizPageContent {
  const quizPage = FUNNEL_CONFIG.quizPage.find((page) => page.slug === slug);

  if (!quizPage) {
    throw new Error('ERROR_QUIZ_PAGE_CONTENT_NOT_FOUND');
  }

  return quizPage;
}

function getQuizPageSlug(
  currentSlug: string,
  direction: 'next' | 'previous'
): { slug: string; isBoundaryPage: boolean } | null {
  const currentIndex = QUIZ_PAGES_SLUGS.indexOf(currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
  const isBoundaryPage =
    (direction === 'next' && newIndex >= QUIZ_PAGES_SLUGS.length) ||
    (direction === 'previous' && newIndex < 0);

  return {
    slug: isBoundaryPage ? '' : QUIZ_PAGES_SLUGS[newIndex],
    isBoundaryPage,
  };
}

export function getNextQuizPageSlug(currentSlug: string) {
  const result = getQuizPageSlug(currentSlug, 'next');
  return result ? { slug: result.slug, isLastPage: result.isBoundaryPage } : null;
}

export function getPreviousQuizPageSlug(currentSlug: string) {
  const result = getQuizPageSlug(currentSlug, 'previous');
  return result ? { slug: result.slug, isFirstPage: result.isBoundaryPage } : null;
}

export function getLastQuizPageSlug() {
  return QUIZ_PAGES_SLUGS[QUIZ_PAGES_SLUGS.length - 1];
}

export function getFirstQuizPageSlug() {
  return QUIZ_PAGES_SLUGS[0];
}

export const FunnelLib = {
  getQuizPageContentBySlug,
  getQuizPageSlug,
  getNextQuizPageSlug,
  getPreviousQuizPageSlug,
  getLastQuizPageSlug,
  getFirstQuizPageSlug,
};
