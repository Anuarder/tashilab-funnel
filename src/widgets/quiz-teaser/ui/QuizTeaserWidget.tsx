import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Funnel, FunnelLib } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { UiButton } from '~shared/ui';

export function QuizTeaserWidget(props: { content: Funnel['QuizTeaser'] }) {
  const navigate = useNavigate();

  const nextPageSlug = useMemo(
    () => FunnelLib.getNextQuizPageSlug(props.content.slug),
    [props.content.slug]
  );

  if (!nextPageSlug) {
    throw new Error('ERROR_QUIZ_PAGE_NEXT_NOT_FOUND');
  }

  const onGoToNextPage = useCallback(() => {
    if (nextPageSlug.isLastPage) {
      navigate(ROUTES.ROOT.path());
    } else {
      navigate(ROUTES.QUIZ.path(nextPageSlug.slug));
    }
  }, [navigate, nextPageSlug]);

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
        <UiButton title="Continue" events={{ onClick: onGoToNextPage }} />
      </div>
    </section>
  );
}
