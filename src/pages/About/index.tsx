import PageLayout from '@/components/common/PageLayout';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';
import { DB } from '@/utils/dbConfig';
import { useRequest, useToggle } from 'ahooks';
import React, {memo} from 'react';
import type {FC, ReactNode} from 'react';
import { Title } from '../pageTitle';
import Switch from './Switch';
import style from './index.module.scss';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';

interface IProps {
  children?: ReactNode
}

const About: FC<IProps> = () => {
  const [state, {toggle, setLeft, setRight}] = useToggle();

  const {data, loading} = useRequest(getOrderData,{
    defaultParams: [{ dbName: DB.About}],
    retryCount: 3,
    cacheKey: `About-${DB.About}`,
    staleTime
  })
  return (
    <PageLayout title={Title.About} loading={loading}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      <AboutMe className={state ? '' : style.hidden} content={data?.data[1].content} />
      <AboutSite className={state ? style.hidden : ''} content={data?.data[0].content}
      />
    </PageLayout>
  )
}

export default About;