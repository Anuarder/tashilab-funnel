export function AgeSelector(props: {
  title: string;
  value: string;
  image: string;
  events: {
    onAgeSelect: (age: string) => void;
  };
}) {
  return (
    <button
      type="button"
      className="relative text-left aspect-square active:scale-95 active:opacity-85 duration-200"
      onClick={() => props.events.onAgeSelect(props.value)}
    >
      <img
        width="160"
        height="160"
        className="w-full h-full aspect-square"
        src={props.image}
        alt={props.title}
      />

      <span className="absolute pr-2 pl-3 inset-x-1 bottom-1 rounded-md flex text-sm bg-purple-primary text-white items-center gap-2 h-10">
        <span className="flex-1">{props.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <rect width="20" height="20" fill="#fff" rx="10" />
          <path
            fill="#5653FE"
            d="M7.744 15.59a.833.833 0 0 1 0-1.18l4.41-4.41-4.41-4.41a.833.833 0 1 1 1.179-1.18l5 5a.833.833 0 0 1 0 1.18l-5 5a.833.833 0 0 1-1.179 0Z"
          />
        </svg>
      </span>
    </button>
  );
}
