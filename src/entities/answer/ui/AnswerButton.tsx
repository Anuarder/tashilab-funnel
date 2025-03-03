import type { Funnel } from '~entities/funnel';

export function AnswerButton(props: {
  answer: Funnel['QuizAnswer'];
  events: {
    onSelect: (answer: Funnel['QuizAnswer']) => void;
  };
}) {
  return (
    <button
      type="button"
      className="rounded-lg aspect-square w-full border border-slate-200 text-center duration-200 active:border-purple-primary active:bg-indigo-50"
      onClick={() => props.events.onSelect(props.answer)}
    >
      {props.answer.icon}
    </button>
  );
}
