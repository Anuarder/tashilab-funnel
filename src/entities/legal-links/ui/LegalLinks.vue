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
    refund: {
      name: 'LegalPage',
      params: {
        slug: 'refund',
      },
    },
  };
</script>

<template>
  <p class="text-purple-text-primary group text-center text-xs text-pretty opacity-60">
    By choosing your age, you agree with
    <RouterLink :to="PAGE_SLUGS.terms" class="whitespace-nowrap underline">
      Terms and Conditions,
    </RouterLink>
    <RouterLink :to="PAGE_SLUGS.privacy" class="whitespace-nowrap underline">
      Privacy Policy
    </RouterLink>
    and
    <RouterLink :to="PAGE_SLUGS.refund" class="whitespace-nowrap underline">
      Refund Policy
    </RouterLink>
  </p>
</template>
