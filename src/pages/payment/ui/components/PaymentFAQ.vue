<script setup lang="ts">
  import { ref } from 'vue';

  const FAQ = [
    {
      question: 'How can your IT guide help me transition to a tech career?',
      answer:
        "<p>Our guide provides a step-by-step roadmap for switching to IT, even if you have no experience. You'll learn which skills are in demand, how to gain them, and how to land your first job with practical strategies.</p>",
    },
    {
      question: 'What if I’m not sure which IT field is right for me?',
      answer:
        '<p>The IT industry is diverse, offering careers beyond just programming. Our guide explores multiple paths, helping you find the best fit based on your interests and strengths.</p><p>Here are some of the key IT careers covered:</p><ul><li>Mobile Development – Build apps for iOS and Android.</li><li>Frontend Development – Create beautiful and interactive websites.</li><li>Backend Development – Work with databases and server logic.</li><liQuality Assurance (QA) – Test and ensure software quality.</li><liIT Administration – Manage systems, networks, and security.</li><liProduct Management – Oversee development and strategy.</li><liData Roles – encompasses Data Engineering (building big data infrastructure), Data Analytics (analyzing trends for business insights), and Data Science (applying AI and machine learning for predictions), providing a range of opportunities for data-driven careers.</li><liMarketing in IT – Drive digital campaigns and user growth.</li></ul><p>With detailed insights into each field, our guide helps you understand the skills, job market, and learning path for each career so you can confidently choose the right one! 🚀</p>',
    },
    {
      question: 'Is it too late to switch to IT if I’m over 30?',
      answer:
        '<p>Not at all! Many professionals change careers in their 30s, 40s, and even 50s. The IT industry values skills over age, and our guide shows you how to leverage your past experience in your new career.</p>',
    },
  ];

  const visibleFaqIndex = ref<number>();

  function toggleFaq(index: number) {
    if (visibleFaqIndex.value === index) {
      visibleFaqIndex.value = undefined;
    } else {
      visibleFaqIndex.value = index;
    }
  }
</script>

<template>
  <div>
    <h2 class="px-4 text-center text-2xl font-semibold">People often ask</h2>

    <ul class="mt-6 flex flex-col gap-3">
      <li v-for="(item, i) in FAQ" :key="`faq_${i}`" class="rounded-lg bg-[#F5F7F9]">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-pretty"
          @click="toggleFaq(i)"
        >
          <span class="flex-1">{{ item.question }}</span>
          <svg
            class="duration-200"
            :class="{ 'rotate-180': visibleFaqIndex === i }"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              fill="#6B7280"
              d="M4.41 7.744a.833.833 0 0 1 1.18 0l4.41 4.41 4.41-4.41a.833.833 0 1 1 1.18 1.179l-5 5a.833.833 0 0 1-1.18 0l-5-5a.833.833 0 0 1 0-1.179Z"
            />
          </svg>
        </button>

        <div v-auto-animate>
          <div
            v-if="visibleFaqIndex === i"
            v-html="item.answer"
            class="prose px-4 pb-4 text-sm"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>
