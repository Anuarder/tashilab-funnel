import { AnswerRadio } from '~entities/answer';
import { type Funnel } from '~entities/funnel';
import { UiButton } from '~shared/ui';

export function QuizWithMultipleAnswers(props: {
  content: Funnel['QuizQuestion'];
  events: {
    onSelected: () => void;
  };
}) {
  function onSelect(answer: Funnel['QuizAnswer']) {
    console.log('multiple', answer);
  }

  return (
    <>
      <div className="flex-1 mt-6 pb-6">
        <ul className="flex flex-col space-y-3">
          {props.content.answers.map(answer => (
            <li key={answer.slug}>
              <AnswerRadio answer={answer} events={{ onSelect }} />
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky bottom-0">
        <UiButton
          title="Continue"
          events={{ onClick: props.events.onSelected }}
        />
      </div>
    </>
  );
}
