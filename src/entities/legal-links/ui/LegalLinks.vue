<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  const PAGE_SLUGS = {
    privacy: {
      name: 'LegalPage',
      params: {
        slug: 'privacy',
      },
    },
    terms: {
      name: 'LegalPage',
      params: {
        slug: 'terms',
      },
    },
  };
</script>

<template>
  <p class="text-purple-text-primary group text-center text-xs opacity-60">
    By choosing your age, you agree with
    <RouterLink :to="PAGE_SLUGS.terms" class="underline"> Terms and Conditions, </RouterLink>
    <RouterLink :to="PAGE_SLUGS.privacy" class="underline"> Privacy Policy </RouterLink>
  </p>
</template>
