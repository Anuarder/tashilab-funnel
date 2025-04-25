<script setup lang="ts">
  import { useTemplateRef } from 'vue';

  import { UiButton } from '~shared/ui';

  import PaymentCard from './components/PaymentCard.vue';
  import PaymentFAQ from './components/PaymentFAQ.vue';
  import PaymentReviews from './components/PaymentReviews.vue';
  import PaymentTimer from './components/PaymentTimer.vue';

  const paymentCardBlock = useTemplateRef('payment-card-block');

  function goToPaymentCard() {
    if (paymentCardBlock.value) {
      paymentCardBlock.value.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  function onTimerStopped() {
    console.log('Timer stopped');
  }
</script>

<template>
  <main
    class="text-purple-text-primary mx-auto grid h-dvh max-w-[450px] grid-rows-[auto_1fr_auto] overflow-hidden"
  >
    <header class="sticky top-0 flex justify-between bg-white px-4 py-3">
      <PaymentTimer @onTimerStopped="onTimerStopped" />
      <div class="w-36">
        <UiButton
          type="button"
          class="text-sm font-semibold"
          title="Buy now"
          @onClick="goToPaymentCard"
        />
      </div>
    </header>

    <section class="flex flex-col overflow-auto pb-6">
      <div class="px-4 pt-4 text-center">
        <h1 class="text-2xl font-semibold text-pretty">
          Start Your Personalized IT Career Journey Here!
        </h1>
        <p class="mt-2 text-sm text-pretty">
          Join the Thousands Who Trust Us for IT Career Growth!
        </p>
      </div>

      <div class="mt-6 flex justify-center px-4">
        <img height="205" width="328" src="./assets/banner.svg" alt="" />
      </div>

      <div ref="payment-card-block" class="mt-6 px-4">
        <PaymentCard />
      </div>

      <PaymentReviews class="mt-6" />

      <PaymentFAQ class="mt-12 px-4" />

      <div class="mt-6 px-4">
        <PaymentCard />
      </div>
    </section>
  </main>
</template>
