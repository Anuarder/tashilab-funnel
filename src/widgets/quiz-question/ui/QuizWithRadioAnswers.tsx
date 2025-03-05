import { AnswerRadio } from '~entities/answer';
import { type Funnel } from '~entities/funnel';

export function QuizWithRadioAnswers(props: {
  content: Funnel['QuizQuestion'];
  events: {
    onSelected: () => void;
  };
}) {
  function onSelect(answer: Funnel['QuizAnswer']) {
    console.log('radio', answer);

    props.events.onSelected();
  }

  return (
    <div className="mt-6 pb-6">
      <ul className="flex flex-col space-y-3">
        {props.content.answers.map(answer => (
          <li key={answer.slug}>
            <AnswerRadio answer={answer} events={{ onSelect }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
