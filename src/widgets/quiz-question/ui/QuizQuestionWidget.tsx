import { type Funnel, QUIZ_ANSWER_TYPES } from '~entities/funnel';
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

export function QuizQuestionWidget(props: {
  content: Funnel['QuizQuestion'];
  events: {
    onGoToNextPage: () => void;
  };
}) {
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
          onGoToNextPage: props.events.onGoToNextPage,
        },
      })}
    </section>
  );
}
