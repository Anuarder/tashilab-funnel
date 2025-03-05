import CountUp from 'react-countup';

import './create-plan-loader.css';

export function CreatePlanLoader() {
  return (
    <div className="relative">
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        className="create-plan-loader"
      >
        <circle className="create-plan-loader__background"></circle>
        <circle className="create-plan-loader__loader"></circle>
      </svg>

      <span className="flex justify-center items-center text-3xl font-bold absolute inset-0">
        <CountUp className="min-w-10" duration={10} end={100} />
        <span>%</span>
      </span>
    </div>
  );
}
