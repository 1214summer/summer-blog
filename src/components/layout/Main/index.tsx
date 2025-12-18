import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/common/ErrorBoundary';
import { LoadingOutlined} from '@ant-design/icons';
import style from './index.module.scss';

const Home = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Home'));
const Articles = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Articles'));
const Classes = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Classes'));
const Tags = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Tags'));
const Say = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Say'));
const Log = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Log'));
const About = lazy(() => import(/* webpackPrefetch:true */ '@/pages/About'));
const ArticleDetail = lazy(() => import(/* webpackPrefetch:true */ '@/pages/ArticleDetail'));
const Post = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Post'));

const Main: React.FC = () => {
  return (
    <main className={style.main}>
      <div className={style.center}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingOutlined/>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='articles' element={<Articles />} />
              <Route path='classes' element={<Classes />} />
              <Route path='tags' element={<Tags />} />
              <Route path='say' element={<Say />} />
              <Route path='log' element={<Log />} />
              <Route path='about' element={<About />} />
              <Route path='articleDetail' element={<ArticleDetail />} />
              <Route path='post' element={<Post />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
