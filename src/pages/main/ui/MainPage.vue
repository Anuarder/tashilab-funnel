<script setup lang="ts">
  import { useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';
  import { UiHeadline } from '~shared/ui';

  import { AgeSelector } from '~entities/age-selector';
  import { FUNNEL_CONFIG, FunnelLib, useFunnelStore } from '~entities/funnel';
  import { LegalLinks } from '~entities/legal-links';

  const pageConfig = FUNNEL_CONFIG.mainPage;
  const router = useRouter();

  const funnelStore = useFunnelStore();

  function onAgeSelected(age: string) {
    funnelStore.selectedAge = age;
    router.push({
      name: 'QuizPage',
      params: {
        slug: FunnelLib.getFirstQuizPageSlug(),
      },
    });
  }
</script>

<template>
  <BaseLayout>
    <section class="flex flex-col overflow-auto px-4 pt-5 pb-8">
      <div class="mb-4 flex-1">
        <UiHeadline
          class="uppercase"
          :title="pageConfig.title"
          :subtitle="pageConfig.subtitle"
          :description="pageConfig.description"
        />

        <div class="mt-4 flex justify-center border-b border-b-gray-200 pb-6">
          <div class="grid max-w-[328px] grid-cols-2 place-content-center gap-2">
            <AgeSelector
              v-for="age in pageConfig.ages"
              :key="age.value"
              :title="age.title"
              :image="age.image"
              :value="age.value"
              @onAgeSelected="onAgeSelected"
            />
          </div>
        </div>
      </div>

      <LegalLinks />
    </section>
  </BaseLayout>
</template>
