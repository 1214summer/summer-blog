import { ReactNode, FC } from 'react';
import style from './App.module.scss';
import './global.custom.scss';
import { useLocalStorageState, useMount } from 'ahooks';

import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import Nav from '@/components/layout/Nav';
import BackToTop from '@/components/layout/BackToTop';

import classNames from 'classnames';
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/store';
import {changeModeAction} from "@/store/modules/mode"
import Loading from './components/layout/Loading';
interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  // 从 Redux 获取 mode
  const {modeIndex} = useAppSelector(
    (state) => ({
      modeIndex: state.mode.modeIndex
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch();
  
  const bgClass = [style.bg0, style.bg1, style.bg2];
  const [localMode] = useLocalStorageState('localMode');

  // 组件挂载时，如果有本地存储的 mode，则设置到 Redux
  useMount(() => {
    if (localMode !== undefined) {
      dispatch(changeModeAction(localMode));
    }
  });
  

  return (
    <div className={classNames(style.app, bgClass[modeIndex])}>
      <Loading  duration={1500} onComplete={() => console.log('Loading completed')} />
      <Nav />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;

