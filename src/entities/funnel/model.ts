import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type Funnel, QUIZ_PAGES_QUESTIONS_SLUGS } from '~entities/funnel';

function createSelectedQuizData() {
  return QUIZ_PAGES_QUESTIONS_SLUGS.map((slug) => ({
    slug,
    data: [],
  }));
}

export const useFunnelStore = defineStore('funnel', () => {
  const selectedAge = ref<string>();
  const selectedQuizData =
    ref<Array<{ slug: Funnel['QuizQuestion']['slug']; data: Array<string> }>>(
      createSelectedQuizData()
    );
  const email = ref<string>();

  function getSelectedQuizDataBySlug(slug: Funnel['QuizQuestion']['slug']) {
    const selectedQuizDataBySlug = selectedQuizData.value.find((item) => item.slug === slug);

    if (!selectedQuizDataBySlug) {
      throw new Error('ERROR_SELECTED_QUIZ_DATA_NOT_FOUND');
    }

    return selectedQuizDataBySlug;
  }

  function setSelectedQuizDataBySlug(slug: Funnel['QuizQuestion']['slug'], data: Array<string>) {
    selectedQuizData.value = selectedQuizData.value.map((item) => {
      if (item.slug === slug) {
        item.data = data;
      }

      return item;
    });
  }

  return {
    selectedAge,
    selectedQuizData,
    getSelectedQuizDataBySlug,
    setSelectedQuizDataBySlug,
    email,
  };
});
