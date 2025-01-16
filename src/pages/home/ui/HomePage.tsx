import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~shared/config';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="vh-full bg-slate-50 flex flex-col space-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold ">TASHI LAB</h1>

      <button
        type="button"
        className="py-4 px-6 text-xl font-medium bg-indigo-500 text-white rounded-xl active:opacity-80"
        onClick={() => navigate(ROUTES.QUIZ().path())}
      >
        Start quiz
      </button>
    </main>
  );
}
