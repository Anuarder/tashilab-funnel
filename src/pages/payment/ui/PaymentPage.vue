<script setup lang="ts">
  import { useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';

  const router = useRouter();

  function onGoBack() {
    router.replace({
      name: 'EmailPage',
    });
  }
</script>

<template>
  <BaseLayout :is-can-go-back="true" @onGoBack="onGoBack">
    <section class="flex flex-col overflow-auto px-4 pb-6">PAYMENT PAGE</section>
  </BaseLayout>
</template>
