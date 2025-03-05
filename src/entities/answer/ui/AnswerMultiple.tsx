import classNames from 'classnames';
import type { Funnel } from '~entities/funnel';

export function AnswerMultiple(props: {
  answer: Funnel['QuizAnswer'];
  events: {
    onSelect: (answer: Funnel['QuizAnswer']) => void;
  };
}) {
  const isSelected = false; // TODO: add zustand to implement reactive activation

  return (
    <button
      type="button"
      className={classNames(
        'group rounded-lg min-h-16 border  w-full flex justify-between items-center text-left space-x-3 pl-3 pr-4 py-4 duration-200 active:border-purple-primary active:bg-indigo-50',
        isSelected ? 'border-purple-primary bg-indigo-50' : 'border-slate-200'
      )}
      onClick={() => props.events.onSelect(props.answer)}
    >
      <span className="flex items-center flex-1 space-x-3">
        <span className="text-xl">{props.answer.icon}</span>
        <span className="text-sm font-semibold">{props.answer.title}</span>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        className={classNames(
          'duration-200 group-active:opacity-100',
          isSelected ? 'opacity-100' : 'opacity-0'
        )}
      >
        <rect width="20" height="20" fill="#5653FE" rx="6" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M15.374 5.793a1 1 0 0 1 0 1.414l-6.416 6.417a1 1 0 0 1-1.414 0l-2.917-2.917A1 1 0 1 1 6.04 9.293l2.21 2.21 5.71-5.71a1 1 0 0 1 1.413 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
