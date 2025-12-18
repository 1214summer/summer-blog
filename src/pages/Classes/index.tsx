import React from 'react';
import type {FC, ReactNode} from 'react';
import style from './index.module.scss';
import { useNavigate } from 'react-router';
import { useRequest } from 'ahooks';
import { DB } from '@/utils/dbConfig';
import { staleTime } from '@/utils/constant';
import { getData } from '@/utils/apis/getData';
import PageLayout from '@/components/common/PageLayout';
import { Title } from '../pageTitle';
import ClassBar from './ClassBar';

interface IProps {
    children?: ReactNode
}

interface ClassType {
  _id: string;
  class: string;
  count: number;
}

const Classes: FC<IProps> = () => {
  const navigate = useNavigate();
  const {data, loading} = useRequest(getData, {
    defaultParams: [DB.Class],
    retryCount: 3,
    cacheKey: `Classes-${DB.Class}`,
    staleTime
  })
  return (
    <PageLayout title={Title.Classes}
      loading={loading} className={style.classBox} 
      rows={8}
    >
      {data?.data.map((item: ClassType) => (
        <ClassBar 
          className={style.classItem}
          key={item._id}
          content={item.class}
          num={item.count}
          onClick={() => navigate(`/articleDetail?class=${encodeURIComponent(item.class)}`)} 
        />
      ))}
    </PageLayout>
  )
}

export default Classes;