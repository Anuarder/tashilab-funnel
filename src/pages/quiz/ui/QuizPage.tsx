import { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type Funnel, FunnelLib, QUIZ_PAGES_SLUGS } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';
import { QuizQuestionWidget } from '~widgets/quiz-question';
import { QuizTeaserWidget } from '~widgets/quiz-teaser';

function useGoToPrevPage(slug: string) {
  const navigate = useNavigate();

  const prevQuizPageSlug = useMemo(
    () => FunnelLib.getPreviousQuizPageSlug(slug),
    [slug]
  );
  if (!prevQuizPageSlug) {
    throw new Error('ERROR_QUIZ_PAGE_PREV_NOT_FOUND');
  }

  const onGoToPrevPage = useCallback(() => {
    if (prevQuizPageSlug.isFirstPage) {
      navigate(ROUTES.ROOT.path());
    } else {
      navigate(ROUTES.QUIZ.path(prevQuizPageSlug.slug));
    }
  }, [navigate, prevQuizPageSlug]);

  return {
    onGoToPrevPage,
  };
}

function useGoToNextPage(slug: string) {
  const navigate = useNavigate();

  const nextPageSlug = useMemo(
    () => FunnelLib.getNextQuizPageSlug(slug),
    [slug]
  );
  if (!nextPageSlug) {
    throw new Error('ERROR_QUIZ_PAGE_NEXT_NOT_FOUND');
  }

  const onGoToNextPage = useCallback(() => {
    if (nextPageSlug.isLastPage) {
      navigate(ROUTES.CREATE_PLAN.path());
    } else {
      navigate(ROUTES.QUIZ.path(nextPageSlug.slug));
    }
  }, [navigate, nextPageSlug]);

  return {
    onGoToNextPage,
  };
}

const getQuizPageWidgetByType = (props: {
  content: Funnel['QuizPageContent'];
  events: {
    onGoToNextPage: () => void;
  };
}) =>
  props.content.type === 'question' ? (
    <QuizQuestionWidget
      content={props.content}
      events={{
        onGoToNextPage: props.events.onGoToNextPage,
      }}
    />
  ) : (
    <QuizTeaserWidget
      content={props.content}
      events={{
        onGoToNextPage: props.events.onGoToNextPage,
      }}
    />
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

  const { onGoToPrevPage } = useGoToPrevPage(quizPage.slug);
  const { onGoToNextPage } = useGoToNextPage(quizPage.slug);

  const withProgressBar = useMemo(
    () => quizPage.type === 'question' && !quizPage.withoutProgress,
    [quizPage]
  );
  const progress = useMemo(() => calculateProgress(quizPage.slug), [quizPage]);

  return (
    <BaseLayout
      isCanGoBack={true}
      withProgressBar={withProgressBar}
      progress={progress}
      events={{
        onGoBack: onGoToPrevPage,
      }}
    >
      {getQuizPageWidgetByType({
        content: quizPage,
        events: {
          onGoToNextPage,
        },
      })}
    </BaseLayout>
  );
}
