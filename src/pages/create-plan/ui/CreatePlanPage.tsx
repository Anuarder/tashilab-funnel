import { useNavigate } from 'react-router-dom';
import { CreatePlanLoader } from '~entities/create-plan-loader';
import { FunnelLib } from '~entities/funnel';
import { ROUTES } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';

const lastQuizPageSlug = FunnelLib.getLastQuizPageSlug();

export function CreatePlanPage() {
  const navigate = useNavigate();

  function onGoBack() {
    navigate(ROUTES.QUIZ.path(lastQuizPageSlug));
  }

  return (
    <BaseLayout isCanGoBack={true} events={{ onGoBack }}>
      <section className="flex flex-col pb-6 px-4 overflow-auto">
        <div className="mt-14 flex-1 flex flex-col items-center justify-center">
          <CreatePlanLoader />
          <p className="mt-4">Personalizing your journey…</p>
        </div>
      </section>
    </BaseLayout>
  );
}
