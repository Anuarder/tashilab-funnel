<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';

  import { CreatePlanLoader } from '~entities/create-plan-loader';
  import { FUNNEL_CONFIG, FunnelLib } from '~entities/funnel';

  const lastQuizPageSlug = FunnelLib.getLastQuizPageSlug();
  const createPlanPageContent = FUNNEL_CONFIG.createPlanPage;

  const REDIRECT_SECONDS = 10;
  const REDIRECT_TIMEOUT = REDIRECT_SECONDS * 1000;
  const REVIEW_INTERVAL = REDIRECT_TIMEOUT / createPlanPageContent.reviews.length;

  const router = useRouter();

  const currentReviewIndex = ref(0);
  const currentReview = computed(
    () => FUNNEL_CONFIG.createPlanPage.reviews[currentReviewIndex.value]
  );

  let reviewIntervalId: ReturnType<typeof setInterval>;
  let redirectTimeoutId: ReturnType<typeof setTimeout>;

  function showNextReview() {
    const reviews = createPlanPageContent.reviews;

    if (reviews.length === 0) {
      return;
    }

    if (currentReviewIndex.value === null || currentReviewIndex.value >= reviews.length - 1) {
      currentReviewIndex.value = 0;
    } else {
      currentReviewIndex.value++;
    }
  }

  function onGoBack() {
    router.replace({
      name: 'QuizPage',
      params: {
        slug: lastQuizPageSlug,
      },
      query: {
        direction: 'back',
      },
    });
  }

  onMounted(() => {
    reviewIntervalId = setInterval(() => {
      showNextReview();
    }, REVIEW_INTERVAL);

    redirectTimeoutId = setTimeout(() => {
      router.replace({
        name: 'EmailPage',
      });
    }, REDIRECT_TIMEOUT);
  });

  onUnmounted(() => {
    clearTimeout(redirectTimeoutId);
    clearInterval(reviewIntervalId);
  });
</script>

<template>
  <BaseLayout :is-can-go-back="true" @onGoBack="onGoBack">
    <section class="flex flex-col overflow-auto px-4 pb-6">
      <div class="mt-14 flex flex-1 flex-col items-center justify-center">
        <CreatePlanLoader :animation-duration="REDIRECT_SECONDS" />
        <p class="mt-4 flex">
          <span class="loading">
            {{ createPlanPageContent.planTitle }}
          </span>
          <span class="inline-flex gap-0.5">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
          </span>
        </p>
      </div>

      <div class="border-t border-gray-200 pt-6">
        <h4 class="text-xl font-semibold">{{ createPlanPageContent.title }}</h4>

        <ul class="pt-6">
          <transition
            enter-active-class="duration-200"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
            mode="out-in"
          >
            <li
              :key="`review_${currentReviewIndex}`"
              class="flex flex-col rounded-xl border border-gray-300 p-4 text-sm"
            >
              <span class="grid w-fit grid-cols-5 gap-0.5">
                <svg
                  v-for="star in 5"
                  :key="`rating_star_${star}`"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  fill="none"
                >
                  <path
                    :fill="star <= currentReview.rating ? '#FFB800' : '#FFE49F'"
                    d="M8.103.817a1 1 0 0 1 1.794 0l1.81 3.666a1 1 0 0 0 .752.548l4.046.587a1 1 0 0 1 .555 1.706l-2.928 2.854a1 1 0 0 0-.288.885l.691 4.03a1 1 0 0 1-1.45 1.054l-3.62-1.902a1 1 0 0 0-.93 0l-3.62 1.902a1 1 0 0 1-1.45-1.054l.69-4.03a1 1 0 0 0-.287-.885L.94 7.324a1 1 0 0 1 .555-1.706l4.046-.587a1 1 0 0 0 .753-.548L8.104.817Z"
                  />
                </svg>
              </span>

              <strong v-html="currentReview.title" class="mt-4 font-semibold"></strong>
              <p v-html="currentReview.description" class="mt-2"></p>
              <p v-html="currentReview.author" class="mt-2 text-right opacity-60"></p>
            </li>
          </transition>
        </ul>
      </div>
    </section>
  </BaseLayout>
</template>

<style scoped>
  .dot {
    opacity: 0;
    animation: fadeInOut 1.2s infinite;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.3s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 1;
    }
    75%,
    100% {
      opacity: 0;
    }
  }
</style>
