import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { setupI18N } from '~shared/i18n';
import { vhOptimizer } from '~shared/vh-optimizer';
import '~shared/vh-optimizer/vh.css';

import './assets/css/index.css';
import { router } from './router';

const root = createRoot(document.getElementById('root')!);

vhOptimizer.init();

setupI18N({ locale: 'en' }).then(() => {
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});
