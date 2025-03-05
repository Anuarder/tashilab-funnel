import LogoSVG from '~shared/assets/images/logo.svg';

interface UiToolbarProps {
  withProgressBar?: boolean;
  progress?: number;
  isCanGoBack?: boolean;
  events?: {
    onGoBack?: () => void;
  };
}

export function AppToolbar(props?: UiToolbarProps) {
  return (
    <nav className="h-12 px-4 items-center grid grid-cols-5">
      {props?.isCanGoBack && (
        <button type="button" onClick={() => props?.events?.onGoBack?.()}>
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
      )}

      {!props?.withProgressBar && (
        <img
          className={props?.isCanGoBack ? 'col-span-3 justify-self-center' : ''}
          width="75"
          height="20"
          src={LogoSVG}
          alt="tashilab"
        />
      )}

      {props?.withProgressBar && (
        <div className="col-span-3">
          <div className="relative h-1.5 bg-slate-200 rounded overflow-hidden">
            <div
              className="absolute h-1.5 bg-purple-primary rounded"
              style={{
                width: `${props.progress}%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </nav>
  );
}
