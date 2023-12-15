import { JSX, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from './src/constants/paths.ts';

const HomePage = lazy(
  () => import('./src/components/atomic/pages/home/HomePage.tsx')
);

const ActionPage = lazy(
  () => import('./src//components/atomic/pages/action/ActionPage.tsx')
);

const renderLoader = () => <p>Esperenos</p>;
const AppRoutes = (): JSX.Element => (
  <Suspense fallback={renderLoader()}>
    <Routes>
      <Route path={PATHS.HOME} element={<HomePage />} />
      <Route path={`${PATHS.ACTIONS}/:typeAction`} element={<ActionPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
