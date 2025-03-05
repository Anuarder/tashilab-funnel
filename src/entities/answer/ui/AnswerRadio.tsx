import type { Funnel } from '~entities/funnel';

export function AnswerRadio(props: {
  answer: Funnel['QuizAnswer'];
  events: {
    onSelect: (answer: Funnel['QuizAnswer']) => void;
  };
}) {
  return (
    <button
      type="button"
      className="rounded-lg min-h-16 border border-slate-200 w-full flex items-center text-left space-x-3 pl-3 pr-4 py-4 duration-200 active:border-purple-primary active:bg-indigo-50"
      onClick={() => props.events.onSelect(props.answer)}
    >
      <span className="text-xl">{props.answer.icon}</span>
      <span className="text-sm font-semibold">{props.answer.title}</span>
    </button>
  );
}
