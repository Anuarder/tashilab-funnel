<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import { env } from '~shared/config';
  import { BaseLayout } from '~shared/layout/base-layout';

  import LegalPageShimmer from './LegalPageShimmer.vue';

  const PAGE_SLUGS = {
    privacy: env.PRIVACY_POLICY_URL,
    terms: env.TERMS_CONDITIONS_URL,
  };

  type PageSlug = keyof typeof PAGE_SLUGS;

  const route = useRoute();
  const router = useRouter();
  const isPageLoading = ref(true);

  const slug = computed(() => route.params.slug as PageSlug);
  const url = computed(() => PAGE_SLUGS[slug.value]);

  function onPageLoad() {
    isPageLoading.value = false;
  }

  function onGoBack() {
    router.push({
      name: 'MainPage',
    });
  }

  onMounted(() => {
    if (!slug.value || !Object.hasOwn(PAGE_SLUGS, slug.value)) {
      // router.replace({
      //   name: 'ErrorPage',
      //   params: {
      //     errorCode: 'ERROR_LEGAL_PAGE_SLUG_NOT_FOUND',
      //   },
      // });

      throw new Error('ERROR_LEGAL_PAGE_SLUG_NOT_FOUND');
    }
  });
</script>

<template>
  <BaseLayout :is-can-go-back="true" @onGoBack="onGoBack">
    <section class="relative">
      <Transition
        enter-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isPageLoading" class="absolute inset-0 bg-white">
          <LegalPageShimmer />
        </div>
      </Transition>

      <iframe :src="url" class="h-full w-full" @load="onPageLoad"></iframe>
    </section>
  </BaseLayout>
</template>
