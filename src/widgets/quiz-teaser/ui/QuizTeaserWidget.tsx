import { type Funnel } from '~entities/funnel';
import { UiButton } from '~shared/ui';

export function QuizTeaserWidget(props: {
  content: Funnel['QuizTeaser'];
  events: {
    onGoToNextPage: () => void;
  };
}) {
  return (
    <section className="flex flex-col items-center pt-5 pb-6 px-4 text-pretty overflow-auto">
      <div className="flex-1 pb-6">
        <img
          width="328"
          height="224"
          src={props.content.image}
          className="mx-auto w-full aspect-[41/28]"
          role="presentation"
          alt=""
        />

        <h2 className="text-xl font-bold mt-6">{props.content.title}</h2>
        <p className="mt-3 text-sm leading-relaxed">
          {props.content.description}
        </p>
      </div>

      <div className="sticky w-full bottom-0">
        <UiButton
          title="Continue"
          events={{ onClick: props.events.onGoToNextPage }}
        />
      </div>
    </section>
  );
}
