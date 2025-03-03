import { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type Funnel, FunnelLib, QUIZ_PAGES_SLUGS } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';
import { QuizQuestionWidget } from '~widgets/quiz-question';
import { QuizTeaserWidget } from '~widgets/quiz-teaser';

const getQuizPageWidgetByType = (content: Funnel['QuizPageContent']) =>
  content.type === 'question' ? (
    <QuizQuestionWidget content={content} />
  ) : (
    <QuizTeaserWidget content={content} />
  );

const quizSlugsWithoutTeasers = QUIZ_PAGES_SLUGS.filter(
  v => !v.includes('teaser')
);

const calculateProgress = (slug: string) => {
  const index = quizSlugsWithoutTeasers.indexOf(slug);
  return index === -1
    ? 0
    : ((index + 1) / quizSlugsWithoutTeasers.length) * 100;
};

export function QuizPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug || !QUIZ_PAGES_SLUGS.includes(slug)) {
    throw new Error('ERROR_QUIZ_PAGE_SLUG_NOT_FOUND');
  }

  const quizPage = useMemo(
    () => FunnelLib.getQuizPageContentBySlug(slug),
    [slug]
  );
  if (!quizPage) {
    throw new Error('ERROR_QUIZ_PAGE_CONTENT_NOT_FOUND');
  }

  const prevQuizPageSlug = useMemo(
    () => FunnelLib.getPreviousQuizPageSlug(quizPage.slug),
    [quizPage]
  );
  if (!prevQuizPageSlug) {
    throw new Error('ERROR_QUIZ_PAGE_PREV_NOT_FOUND');
  }

  const onGoBack = useCallback(() => {
    if (prevQuizPageSlug.isFirstPage) {
      navigate(ROUTES.ROOT.path());
    } else {
      navigate(ROUTES.QUIZ.path(prevQuizPageSlug.slug));
    }
  }, [navigate, prevQuizPageSlug]);

  const withProgressBar =
    quizPage.type === 'question' && !quizPage.withoutProgress;
  const progress = useMemo(() => calculateProgress(quizPage.slug), [quizPage]);

  return (
    <BaseLayout
      isCanGoBack={true}
      withProgressBar={withProgressBar}
      progress={progress}
      events={{
        onGoBack,
      }}
    >
      {getQuizPageWidgetByType(quizPage)}
    </BaseLayout>
  );
}
