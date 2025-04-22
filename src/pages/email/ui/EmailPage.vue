<script setup lang="ts">
  import { type Ref, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';
  import { UiButton } from '~shared/ui';

  import { FunnelLib } from '~entities/funnel';

  const lastQuizPageSlug = FunnelLib.getLastQuizPageSlug();
  const router = useRouter();

  const email = ref('');
  const emailErrorMessage = ref('');
  const emailShake = ref(false);

  const hasAgreement = ref(false);
  const hasAgreementErrorMessage = ref('');
  const agreementShake = ref(false);

  const showPopup = ref(false);
  const popupMessage = ref('');
  let popupTimeout: ReturnType<typeof setTimeout>;

  watch(email, () => {
    emailErrorMessage.value = '';
  });

  watch(hasAgreement, () => {
    hasAgreementErrorMessage.value = '';
  });

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function triggerShake(element: Ref<boolean>) {
    element.value = true;
    setTimeout(() => {
      element.value = false;
    }, 500);
  }

  function showValidationPopup(message: string) {
    popupMessage.value = message;
    showPopup.value = true;

    popupTimeout = setTimeout(() => {
      showPopup.value = false;
    }, 2000);
  }

  function submitEmail() {
    clearTimeout(popupTimeout);

    let hasError = false;
    emailErrorMessage.value = '';
    hasAgreementErrorMessage.value = '';

    if (!email.value) {
      emailErrorMessage.value = 'Email is required';
      triggerShake(emailShake);
      hasError = true;
    } else if (!validateEmail(email.value)) {
      emailErrorMessage.value = 'Please enter a valid email address';
      triggerShake(emailShake);
      hasError = true;
    }

    if (!hasAgreement.value) {
      hasAgreementErrorMessage.value = 'You must agree to the terms';
      triggerShake(agreementShake);
      hasError = true;
    }

    if (hasError) {
      showValidationPopup('Please correct the errors in the form');
      return;
    }

    // TODO: send email
    console.log('Email submitted:', email.value);

    router.push({
      name: 'PaymentPage',
    });
  }

  function onGoBack() {
    router.push({
      name: 'QuizPage',
      params: {
        slug: lastQuizPageSlug,
      },
      query: {
        direction: 'back',
      },
    });
  }

  function closePopup() {
    showPopup.value = false;
  }
</script>

<template>
  <BaseLayout :is-can-go-back="true" @onGoBack="onGoBack">
    <section class="flex flex-col overflow-auto px-4 pt-5 pb-6">
      <h2 class="mt-8 text-center text-2xl leading-normal font-semibold text-pretty">
        Enter your email to receive your
        <span class="text-purple-primary">IT career</span> guide!
      </h2>

      <form class="mt-6 flex flex-1 flex-col gap-6" @submit.prevent="submitEmail">
        <div class="relative">
          <label class="relative block" :class="{ 'shake-animation': emailShake }">
            <span class="sr-only">Your email</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path
                  fill="#6B7280"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm3.519 0L12 11.671 18.481 6H5.52ZM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329Z"
                />
              </svg>
            </span>

            <input
              v-model="email"
              type="email"
              name="email"
              class="placeholder:text-secondary focus:border-purple-primary focus:ring-purple-primary/20 block h-12 w-full rounded-md border bg-white pr-3 pl-11 text-sm duration-200 focus:ring-1 focus:outline-none"
              :class="emailErrorMessage ? 'border-red-500' : 'border-gray-300'"
              placeholder="Your email"
            />
          </label>

          <span v-if="emailErrorMessage" class="mt-2 block text-xs text-red-500">
            {{ emailErrorMessage }}
          </span>
        </div>

        <div class="relative">
          <label class="flex items-center gap-3" :class="{ 'shake-animation': agreementShake }">
            <label
              class="inline-flex size-6 items-center justify-center rounded-md border duration-200"
              :class="{
                'bg-purple-primary border-purple-primary': hasAgreement,
                'border-red-500 bg-white': hasAgreementErrorMessage,
                'border-gray-300 bg-white': !hasAgreement && !hasAgreementErrorMessage,
              }"
            >
              <svg
                class="pointer-events-none text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33325 8.66666L5.99992 11.3333L12.6666 4.66666"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                v-model="hasAgreement"
                type="checkbox"
                class="h-0 w-0 appearance-none opacity-0"
              />
            </label>

            <span class="flex-1 text-xs text-pretty">
              I agree to receive valuable content and offers straight to my inbox
            </span>
          </label>

          <span v-if="hasAgreementErrorMessage" class="mt-2 block text-xs text-red-500">
            {{ hasAgreementErrorMessage }}
          </span>
        </div>
      </form>

      <div class="sticky bottom-0 mt-8 w-full">
        <UiButton title="Continue" @onClick="submitEmail" />
      </div>
    </section>

    <!-- Validation Popup -->
    <Transition name="popup-transition">
      <div v-if="showPopup" class="fixed inset-x-4 bottom-22 z-50 mx-auto">
        <div
          class="flex items-center justify-between rounded-md border border-red-200 bg-red-50 p-4"
        >
          <div class="flex items-center">
            <div class="mr-3 flex-shrink-0">
              <svg class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-xs text-red-600">
              {{ popupMessage }}
            </div>
          </div>

          <button type="button" class="ml-4 text-red-600" @click="closePopup">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </BaseLayout>
</template>

<style scoped>
  .shake-animation {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-3px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(3px, 0, 0);
    }
  }

  .popup-transition-enter-active,
  .popup-transition-leave-active {
    transition:
      opacity 0.3s,
      transform 0.3s;
  }

  .popup-transition-enter-from,
  .popup-transition-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
