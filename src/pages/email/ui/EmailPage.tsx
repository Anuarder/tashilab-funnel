import { useNavigate } from 'react-router-dom';
import { FunnelLib } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';

const lastQuizPageSlug = FunnelLib.getLastQuizPageSlug();

export function EmailPage() {
  const navigate = useNavigate();

  function onGoBack() {
    navigate(ROUTES.QUIZ.path(lastQuizPageSlug));
  }

  return (
    <BaseLayout isCanGoBack={true} events={{ onGoBack }}>
      <section className="flex flex-col pt-5 pb-6 px-4 overflow-auto">
        <h1 className="mt-8 text-2xl leading-normal text-center font-semibold">
          Enter your email to receive your{' '}
          <span className="text-purple-primary">IT career</span> guide!
        </h1>
      </section>
    </BaseLayout>
  );
}
