import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizAnswers } from '~shared/api';
import { ROUTES } from '~shared/config';
import { UiToolbar } from '~shared/ui';

const stepProgress = 100 / quizAnswers.length;

export function QuizPage() {
  const navigate = useNavigate();

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const progress = useMemo(
    () => activeQuestionIndex * stepProgress,
    [activeQuestionIndex]
  );

  function goToNextQuiz() {
    setTimeout(() => {
      setActiveQuestionIndex(v => v + 1);
    }, 150);
  }

  function onGoToPreviousQuestion() {
    if (activeQuestionIndex === 0) {
      navigate(ROUTES.ROOT().path());

      return;
    }

    setActiveQuestionIndex(v => v - 1);
  }

  return (
    <main className="bg-slate-50 vh-full flex flex-col">
      <UiToolbar
        progress={progress}
        events={{
          onGoBack: onGoToPreviousQuestion,
        }}
      />

      <AnimatePresence mode="wait">
        {quizAnswers.map(
          (item, index) =>
            activeQuestionIndex === index && (
              <motion.section
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 px-4"
              >
                <h2 className="mt-5 text-center text-xl font-semibold">
                  {item.question}
                </h2>

                <ul className="mt-8 space-y-4">
                  {item.answers.map((answer, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="bg-white font-medium border rounded-lg w-full text-left p-3 active:bg-indigo-50 duration-200"
                        onClick={() => goToNextQuiz()}
                      >
                        {answer.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )
        )}
      </AnimatePresence>
    </main>
  );
}
