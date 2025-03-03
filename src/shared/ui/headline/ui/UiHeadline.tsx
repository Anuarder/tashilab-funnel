import classNames from 'classnames';

export function UiHeadline(props: {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={classNames('text-center text-pretty', props.className)}>
      <h1
        dangerouslySetInnerHTML={{ __html: props.title }}
        className="text-xl font-semibold"
      ></h1>
      {props.subtitle && (
        <h2
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
          className="mt-4 text-xs"
        ></h2>
      )}
      {props.description && (
        <p
          dangerouslySetInnerHTML={{ __html: props.description }}
          className="text-xs mt-3 uppercase"
        ></p>
      )}
    </div>
  );
}
