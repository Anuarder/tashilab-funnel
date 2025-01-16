import { debounce } from 'lodash-es';

function calcVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const debouncedCalcVh = debounce(calcVh, 100);

export const vhOptimizer = {
  init() {
    calcVh();
    window.addEventListener('resize', debouncedCalcVh);
  },
};
