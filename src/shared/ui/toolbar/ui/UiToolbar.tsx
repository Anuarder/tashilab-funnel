export function UiToolbar(props: {
  progress: number;
  events: {
    onGoBack: () => void;
  };
}) {
  return (
    <nav className="h-12 px-4 items-center grid grid-cols-4">
      <button type="button" onClick={() => props.events.onGoBack()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#24234C"
            d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
          />
        </svg>
      </button>

      <div className="col-span-2">
        <div className="h-2 bg-neutral-200 rounded-lg overflow-hidden">
          <div
            style={{
              width: `${props.progress}%`,
            }}
            className="h-2 bg-indigo-500 rounded-lg duration-500"
          ></div>
        </div>
      </div>
    </nav>
  );
}
