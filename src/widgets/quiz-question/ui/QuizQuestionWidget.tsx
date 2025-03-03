import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Funnel, FunnelLib, QUIZ_ANSWER_TYPES } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { UiHeadline } from '~shared/ui';

import { QuizWithButtonsAnswers } from './QuizWithButtonsAnswers';
import { QuizWithMultipleAnswers } from './QuizWithMultipleAnswers';
import { QuizWithRadioAnswers } from './QuizWithRadioAnswers';

function getQuizContentByType(props: {
  content: Funnel['QuizQuestion'];
  events: {
    onGoToNextPage: () => void;
  };
}) {
  switch (props.content.answerType) {
    case QUIZ_ANSWER_TYPES.radio:
      return (
        <QuizWithRadioAnswers
          content={props.content}
          events={{ onSelected: props.events.onGoToNextPage }}
        />
      );
    case QUIZ_ANSWER_TYPES.multiple:
      return (
        <QuizWithMultipleAnswers
          content={props.content}
          events={{
            onSelected: props.events.onGoToNextPage,
          }}
        />
      );
    case QUIZ_ANSWER_TYPES.buttons:
      return (
        <QuizWithButtonsAnswers
          content={props.content}
          events={{ onSelected: props.events.onGoToNextPage }}
        />
      );
    default:
      return null;
  }
}

export function QuizQuestionWidget(props: { content: Funnel['QuizQuestion'] }) {
  const navigate = useNavigate();

  const nextPageSlug = useMemo(
    () => FunnelLib.getNextQuizPageSlug(props.content.slug),
    [props.content.slug]
  );

  if (!nextPageSlug) {
    throw new Error('ERROR_QUIZ_PAGE_NEXT_NOT_FOUND');
  }

  const onGoToNextPage = useCallback(() => {
    if (nextPageSlug.isLastPage) {
      navigate(ROUTES.ROOT.path());
    } else {
      navigate(ROUTES.QUIZ.path(nextPageSlug.slug));
    }
  }, [navigate, nextPageSlug]);

  return (
    <section className="flex flex-col pt-5 pb-6 px-4 overflow-auto">
      <UiHeadline
        title={props.content.title}
        subtitle={props.content.subtitle}
        description={props.content.description}
      />

      {getQuizContentByType({
        content: props.content,
        events: {
          onGoToNextPage,
        },
      })}
    </section>
  );
}
