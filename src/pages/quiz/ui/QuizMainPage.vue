<script setup lang="ts">
  import { computed } from 'vue';
  import { type RouteLocationNormalizedLoadedGeneric, useRoute, useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';

  import { FunnelLib, QUIZ_PAGES_SLUGS } from '~entities/funnel';

  const router = useRouter();
  const route = useRoute();
  const slug = computed(() => route.params.slug as string);

  if (!slug.value || !QUIZ_PAGES_SLUGS.includes(slug.value)) {
    throw new Error('ERROR_QUIZ_PAGE_SLUG_NOT_FOUND');
  }

  const quizPage = computed(() => FunnelLib.getQuizPageContentBySlug(slug.value));

  const quizSlugsWithoutTeasers = QUIZ_PAGES_SLUGS.filter((v) => !v.includes('teaser'));

  function calculateProgress(slug: string) {
    const index = quizSlugsWithoutTeasers.indexOf(slug);
    return index === -1 ? 0 : ((index + 1) / quizSlugsWithoutTeasers.length) * 100;
  }

  const withProgressBar = computed(
    () => quizPage.value.type === 'question' && !quizPage.value.withoutProgress
  );

  const progress = computed(() => calculateProgress(quizPage.value.slug));

  const prevQuizPageSlug = computed(() => FunnelLib.getPreviousQuizPageSlug(slug.value));

  function onGoToPrevPage() {
    if (!prevQuizPageSlug.value) {
      throw new Error('ERROR_QUIZ_PAGE_PREV_NOT_FOUND');
    }

    if (prevQuizPageSlug.value.isFirstPage) {
      router.replace({
        name: 'MainPage',
      });
    } else {
      router.replace({
        name: 'QuizPage',
        params: {
          slug: prevQuizPageSlug.value.slug,
        },
        query: {
          direction: 'back',
        },
      });
    }
  }

  function getTranslateTrasition(route: RouteLocationNormalizedLoadedGeneric) {
    if (route.query.direction === 'back') {
      return '-translate-x-10';
    }

    return 'translate-x-10';
  }
</script>

<template>
  <BaseLayout
    :isCanGoBack="true"
    :withProgressBar="withProgressBar"
    :progress="progress"
    @onGoBack="onGoToPrevPage"
  >
    <RouterView v-slot="{ Component, route }">
      <Transition
        enter-active-class="duration-300"
        :enter-from-class="`opacity-0 ${getTranslateTrasition(route)}`"
        enter-to-class="opacity-100 translate-x-0"
      >
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </BaseLayout>
</template>
