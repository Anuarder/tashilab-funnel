export function UiButton(props: {
  title: string;
  events: {
    onClick: () => void;
  };
}) {
  return (
    <button
      type="button"
      className="bg-purple-primary text-white h-12 w-full rounded-lg active:opacity-85 duration-200"
      onClick={() => props.events.onClick()}
    >
      {props.title}
    </button>
  );
}
