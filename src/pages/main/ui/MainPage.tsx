import { useNavigate } from 'react-router-dom';
import { AgeSelector } from '~entities/age-selector';
import { FUNNEL_CONFIG, FunnelLib } from '~entities/funnel';
import { LegalLinks } from '~entities/legal-links';
import { ROUTES } from '~shared/config';
import { BaseLayout } from '~shared/layout/base-layout';
import { UiHeadline } from '~shared/ui';

const pageConfig = FUNNEL_CONFIG.mainPage;

export function MainPage() {
  const navigate = useNavigate();

  function onAgeSelect(age: string) {
    console.log(age);

    navigate(ROUTES.QUIZ.path(FunnelLib.getFirstQuizPageSlug()));
  }

  return (
    <BaseLayout>
      <section className="flex flex-col pt-5 pb-8 px-4 overflow-auto">
        <div className="flex-1 mb-4">
          <UiHeadline
            className="uppercase"
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
          />

          <div className="mt-4 pb-6 border-b flex justify-center">
            <div className="grid place-content-center grid-cols-2 gap-2 max-w-[328px]">
              {pageConfig.ages.map(age => (
                <AgeSelector
                  key={age.value}
                  title={age.title}
                  image={age.image}
                  value={age.value}
                  events={{
                    onAgeSelect,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <LegalLinks />
      </section>
    </BaseLayout>
  );
}
