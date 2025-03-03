import { AnswerButton } from '~entities/answer';
import { type Funnel } from '~entities/funnel';

export function QuizWithButtonsAnswers(props: {
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
    <div className="flex-1 mt-6 pb-12 flex items-end justify-center">
      <ul className="grid grid-cols-5 gap-3 w-full max-w-[360px]">
        {props.content.answers.map(answer => (
          <li
            key={answer.slug}
            className="text-xl last:text-3xl first:text-3xl"
          >
            <AnswerButton answer={answer} events={{ onSelect }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
