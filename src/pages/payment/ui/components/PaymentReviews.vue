<script setup lang="ts">
  const REVIEWS = [
    {
      description:
        'I had no idea where to start in IT—backend, frontend, data? This guide broke it all down, explained the differences, and helped me find the perfect fit. Now I’m learning mobile development and feeling confident about my future.',
      author: 'Rachel K., mobile developer',
      rating: 5,
    },
    {
      description:
        'The resume and job search tips alone were worth the price. I followed the advice, built a portfolio, and landed a junior backend developer role in just a few months. Don’t hesitate this guide works!',
      author: 'Mark R., backend developer',
      rating: 5,
    },
    {
      description:
        'I always loved designing, but I wasn’t sure how to turn it into a real career. The guide helped me learn UI/UX principles, build a strong portfolio, and land my first freelance projects. It’s a must-have for aspiring designers!',
      author: 'Emily J., freelance UX designer',
      rating: 5,
    },
  ];

  function scrollToItem(e: Event) {
    const target = e.target as HTMLLIElement;

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
</script>

<template>
  <div>
    <h2 class="px-4 text-center text-2xl font-semibold">What our users are saying</h2>

    <ul
      class="invisible-scrollbar mt-6 flex snap-x snap-mandatory scroll-px-4 items-stretch gap-4 overflow-auto overscroll-x-contain px-4"
    >
      <li
        v-for="(item, i) in REVIEWS"
        :key="`review_${i}`"
        class="flex min-h-[264px] max-w-[288px] min-w-[288px] snap-start flex-col rounded-xl border border-gray-200 p-4 text-sm"
        @click="scrollToItem"
      >
        <p class="flex-1 leading-normal">
          {{ item.description }}
        </p>
        <div class="border-t border-gray-200 pt-3">
          <strong class="font-medium">{{ item.author }}</strong>
          <span class="mt-2.5 grid w-fit grid-cols-5 gap-0.5">
            <svg
              v-for="star in 5"
              :key="`rating_star_${star}`"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              fill="none"
            >
              <path
                :fill="star <= item.rating ? '#FFB800' : '#FFE49F'"
                d="M8.103.817a1 1 0 0 1 1.794 0l1.81 3.666a1 1 0 0 0 .752.548l4.046.587a1 1 0 0 1 .555 1.706l-2.928 2.854a1 1 0 0 0-.288.885l.691 4.03a1 1 0 0 1-1.45 1.054l-3.62-1.902a1 1 0 0 0-.93 0l-3.62 1.902a1 1 0 0 1-1.45-1.054l.69-4.03a1 1 0 0 0-.287-.885L.94 7.324a1 1 0 0 1 .555-1.706l4.046-.587a1 1 0 0 0 .753-.548L8.104.817Z"
              />
            </svg>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
