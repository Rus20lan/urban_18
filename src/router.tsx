import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Beans from './components/pages/beans/Beans';
import Facts from './components/pages/facts/Facts';
import Recipes from './components/pages/recipes/Recipes';
import Combinations from './components/pages/combinations/Combinations';
import History from './components/pages/history/History';
import About from './components/pages/about/About';
import { Links } from './utils/consts';
import Home from './components/pages/home/Home';
import Bean from './components/pages/bean/BeanPage';
import Review from './components/pages/review/Review';

export const router = createBrowserRouter(
  [
    {
      path: 'urban_18',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: Links.BEANS, element: <Beans /> },
        { path: `beans/:id`, element: <Bean /> },
        { path: Links.FACTS, element: <Facts /> },
        { path: Links.RECIPES, element: <Recipes /> },
        { path: Links.COMBINATIONS, element: <Combinations /> },
        { path: Links.HISTORY, element: <History /> },
        { path: Links.ABOUT, element: <About /> },
        { path: Links.REVIEW, element: <Review /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
