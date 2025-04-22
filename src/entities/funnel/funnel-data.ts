import age18Image from '~shared/assets/images/ages/age-18.svg';
import age25Image from '~shared/assets/images/ages/age-25.svg';
import age35Image from '~shared/assets/images/ages/age-35.svg';
import age45Image from '~shared/assets/images/ages/age-45.svg';

import betterCareerImage from './assets/better-career.svg';
import learningStyleImage from './assets/learning-style.svg';
import noExperienceImage from './assets/no-experience.svg';
import readyForTechImage from './assets/ready-for-tech.svg';
import turnItAmbitionsImage from './assets/turn-it-ambitions.svg';
import { QUIZ_ANSWER_TYPES } from './config';
import type { Funnel } from './types.ts';

export const FUNNEL_CONFIG: Funnel['FunnelConfig'] = {
  mainPage: {
    title: 'FIND YOUR IT CAREER PATH <br /> NOT JUST ANOTHER COURSE',
    subtitle: 'SELECT YOUR <b>AGE</b>',
    description: '<b>1-minute</b> quiz',
    ages: [
      { title: 'Age: 18-24', value: '18-24', image: age18Image },
      { title: 'Age: 25-34', value: '25-34', image: age25Image },
      { title: 'Age: 35-44', value: '35-44', image: age35Image },
      { title: 'Age: 45+', value: '45+', image: age45Image },
    ],
  },
  quizPage: [
    {
      slug: 'gender',
      type: 'question',
      withoutProgress: true,
      title: 'FIND YOUR IT CAREER PATH <br /> NOT JUST ANOTHER COURSE',
      subtitle: 'SELECT YOUR <b>GENDER</b>',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'male', icon: '👨', title: 'Male' },
        { slug: 'female', icon: '👩', title: 'Female' },
        { slug: 'other', icon: '🧑', title: 'Other' },
      ],
    },
    {
      slug: 'ready-for-tech-teaser',
      type: 'teaser',
      title: "Ready for tech? You're more ready than you think",
      image: readyForTechImage,
      description:
        'Your dream tech career is closer than you think! Break into a high-paying, flexible industry with endless opportunities—no experience needed. Our guide gives you the exact steps to start, grow, and succeed. The future is yours—let’s make it happen!',
    },
    {
      slug: 'main-goal',
      type: 'question',
      title: 'What is your main goal?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'high-salary', icon: '💰', title: 'Earn a high salary' },
        { slug: 'wealth', icon: '🚀', title: 'Grow wealth' },
        { slug: 'work-life-balance', icon: '🏝️', title: 'Work-life balance' },
        {
          slug: 'professional-growth',
          icon: '📈',
          title: 'Professional growth',
        },
        {
          slug: 'global-companies',
          icon: '🌍',
          title: 'Work for global companies',
        },
      ],
    },
    {
      slug: 'job-challenges',
      type: 'question',
      title: 'Which challenges do you face in your current job?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'underpaid', icon: '💸', title: 'Feeling underpaid' },
        {
          slug: 'limited-growth',
          icon: '📉',
          title: 'Limited professional growth',
        },
        { slug: 'poor-balance', icon: '⏳', title: 'Poor work-life balance' },
        { slug: 'bored', icon: '😐', title: 'Bored or unfulfilled' },
        { slug: 'other', icon: '❔', title: 'Other' },
      ],
    },
    {
      slug: 'better-career-teaser',
      type: 'teaser',
      title: 'A Better Career is Possible!',
      image: betterCareerImage,
      description:
        'Feeling stuck, underpaid, or burned out? Many professionals face these challenges, but there are career paths that offer growth, flexibility, and fulfillment. Explore opportunities that align with your goals and lifestyle.',
    },
    {
      slug: 'tech-comfort',
      type: 'question',
      title: 'How would you describe your comfort with technology?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'tech-savvy', icon: '🧠', title: 'Highly tech-savvy' },
        { slug: 'average', icon: '💻', title: 'Average user' },
        { slug: 'beginner', icon: '🌱', title: 'Beginner with room to learn' },
      ],
    },
    {
      slug: 'it-career-concern',
      type: 'question',
      title: "What's your biggest concern about starting an IT career?",
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        {
          slug: 'time-investment',
          icon: '⏳',
          title: "I'm worried about the time investment",
        },
        {
          slug: 'skills',
          icon: '🛠️',
          title: "I'm unsure if I have the right skills",
        },
        {
          slug: 'cost',
          icon: '💰',
          title: 'Concerned about the cost of training',
        },
        { slug: 'not-sure', icon: '🧭', title: 'Not sure where to start' },
      ],
    },
    {
      slug: 'no-experience-teaser',
      type: 'teaser',
      title: 'No Experience? No Problem!',
      image: noExperienceImage,
      description:
        'Every expert started as a beginner. IT offers structured learning paths where you build skills from the ground up. With practice, patience, and the right guidance, you’ll gain confidence quickly.',
    },
    {
      slug: 'job-interest',
      type: 'question',
      title: 'Would you enjoy a job that matches your interests?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        {
          slug: 'love-career',
          icon: '🔥',
          title: 'Absolutely! I want a career I love',
        },
        {
          slug: 'maybe',
          icon: '🤔',
          title: 'Maybe, I haven’t figured it out yet',
        },
        {
          slug: 'stability',
          icon: '💰',
          title: 'Stability and a good salary matter most',
        },
        {
          slug: 'explore',
          icon: '🚀',
          title: "I'm ready to explore new possibilities!",
        },
      ],
    },
    {
      slug: 'control-over-job',
      type: 'question',
      title: 'Do you wish you had more control over your work hours and location?',
      answerType: QUIZ_ANSWER_TYPES.buttons,
      answers: [
        { slug: 'very-bad', icon: '👎' },
        { slug: 'bad', icon: '👎' },
        { slug: 'neutral', icon: '🤔' },
        { slug: 'good', icon: '👍' },
        { slug: 'very-good', icon: '👍' },
      ],
    },
    {
      slug: 'career-motivation',
      type: 'question',
      title: 'What drives you to start a career in IT?',
      description: 'PICK ALL THAT <b>APPLY</b>',
      answerType: QUIZ_ANSWER_TYPES.multiple,
      answers: [
        { slug: 'higher-salary', icon: '💰', title: 'Higher salary' },
        {
          slug: 'better-balance',
          icon: '⚖️',
          title: 'Better work-life balance',
        },
        { slug: 'learning', icon: '📚', title: 'Continuous learning' },
        { slug: 'remote-work', icon: '🏡', title: 'Remote work' },
        {
          slug: 'cutting-edge',
          icon: '🔧',
          title: 'Working on cutting-edge tech',
        },
      ],
    },
    {
      slug: 'turn-it-ambitions-teaser',
      type: 'teaser',
      title: 'Turn Your IT Ambitions into Reality!',
      image: turnItAmbitionsImage,
      description:
        "Whether you're aiming for a higher salary, better work-life balance, or exciting innovation, IT offers endless opportunities. Find the path that aligns with your goals and start building your future today!",
    },
    {
      slug: 'exploring-it-career',
      type: 'question',
      title: 'Have you started exploring a career in IT?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        {
          slug: 'already-in-it',
          icon: '👨‍💻',
          title: 'Yes, I already work or study IT.',
        },
        { slug: 'some-courses', icon: '📖', title: "I've taken some courses." },
        {
          slug: 'interested',
          icon: '💡',
          title: "I'm interested but haven’t started.",
        },
        { slug: 'no-idea', icon: '❓', title: 'I don’t know where to begin.' },
      ],
    },
    {
      slug: 'learning-preference',
      type: 'question',
      title: 'How do you prefer to learn new skills?',
      description: 'PICK ALL THAT <b>APPLY</b>',
      answerType: QUIZ_ANSWER_TYPES.multiple,
      answers: [
        {
          slug: 'online-courses',
          icon: '💻',
          title: 'Online courses or tutorials',
        },
        { slug: 'books', icon: '📖', title: 'Reading books or articles' },
        {
          slug: 'hands-on',
          icon: '🛠️',
          title: 'Hands-on practice and projects',
        },
        {
          slug: 'mentor-group',
          icon: '👥',
          title: 'Learning with a mentor or in a group',
        },
      ],
    },
    {
      slug: 'learning-style-teaser',
      type: 'teaser',
      title: 'Learn Your Way, Grow Your Skills!',
      image: learningStyleImage,
      description:
        "No matter how you learn best—through online courses, hands-on projects, or expert mentorship—we've got the perfect learning experience for you. Our structured content is designed to help you gain real-world IT skills efficiently and effectively. Take the next step toward a high-paying, flexible IT career today! 🚀",
    },
    {
      slug: 'it-career-readiness',
      type: 'question',
      title: 'If you had a clear plan to start in IT, how ready would you be?',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'ready', icon: '💪', title: 'Ready to start!' },
        { slug: 'almost-ready', icon: '⏳', title: 'Almost ready' },
        {
          slug: 'interested-but-unsure',
          icon: '🤔',
          title: 'Interested, but unsure',
        },
      ],
    },
    {
      slug: 'goal-motivation',
      type: 'question',
      title: "What's your biggest motivation for building a successful IT career?",
      subtitle: "You're more likely to reach your goal if you have something important to aim for.",
      description: 'PICK ALL THAT <b>APPLY</b>',
      answerType: QUIZ_ANSWER_TYPES.multiple,
      answers: [
        { slug: 'buy-house', icon: '🏡', title: 'Buy a house' },
        { slug: 'wedding', icon: '💍', title: 'A perfect wedding' },
        { slug: 'travel', icon: '✈️', title: 'Travel the world' },
        { slug: 'buy-car', icon: '🚗', title: 'Buy a car' },
        {
          slug: 'financial-freedom',
          icon: '🥂',
          title: 'Achieve financial freedom',
        },
        { slug: 'other', icon: '👀', title: 'Other' },
      ],
    },
    {
      slug: 'self-development-time',
      type: 'question',
      title: 'How much time will you spend on self-development daily?',
      subtitle: 'Choose your daily commitment:',
      answerType: QUIZ_ANSWER_TYPES.radio,
      answers: [
        { slug: 'slow', icon: '🐢', title: 'Easy – Taking it slow' },
        { slug: 'steady', icon: '📈', title: 'Steady – Staying consistent' },
        { slug: 'serious', icon: '🔥', title: 'Serious – Focused on growth' },
        { slug: 'intensive', icon: '🚀', title: 'Intensive – All in!' },
      ],
    },
  ],
  createPlanPage: {
    planTitle: 'Personalizing your journey',
    title: '🚀 Join the IT Journey Today!',
    reviews: [
      {
        rating: 5,
        title: 'Perfect for beginners',
        description:
          'I had no clue where to start, but this guide gave me a clear path. I’m now freelancing and building real projects for clients.',
        author: '<b>— Daniel</b>, freelance frontend developer',
      },
      {
        rating: 5,
        title: 'From hobby to hired',
        description:
          'I used to just play around with design in my spare time. Now I’ve got a polished portfolio and a full-time role at a design agency!',
        author: '<b>— Ruby</b>, visual designer',
      },
      {
        rating: 5,
        title: 'Got my first job as a backend developer',
        description:
          'I followed the guide’s learning roadmap, built a portfolio, and landed my first job in just a few months!',
        author: '<b>— Jessica</b>, junior backend developer',
      },
    ],
  },
};

export const QUIZ_PAGES_SLUGS = FUNNEL_CONFIG.quizPage.map((page) => page.slug);
export const QUIZ_PAGES_QUESTIONS_SLUGS = FUNNEL_CONFIG.quizPage
  .filter((page) => page.type === 'question')
  .map((page) => page.slug);
