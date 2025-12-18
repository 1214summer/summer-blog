import React from 'react';
import type {FC, ReactNode} from 'react';

import PageTitle from '@/components/common/PageTitle';
import { useMount, useSafeState, useTitle } from 'ahooks';
import style from './index.module.scss'
import { siteTitle } from '@/utils/constant';
// import poem from 'poem';
import Aside from './Aside';
import Section from './Section';

interface IProps {
    children?: ReactNode
}
const Home: FC<IProps> = () => {
  
  // useTitle(siteTitle);
  const [poemText, setPoemText] = useSafeState<string>('')
  useMount(async () => {
      const randomPoem = "欲穷千里目";
      setPoemText(randomPoem);
  });
  return (
    <>
      <PageTitle title={siteTitle} desc={poemText || ''}/>
      <div className={style.body}>
        <Section />
        <Aside />
      </div>
    </>
  )
}

export default Home;