import React, {useState} from 'react';
import type {FC, ReactNode} from 'react';
import PageLayout from '@/components/common/PageLayout';
import ImgView from '@/components/common/ImgView';

import {Title} from '../pageTitle';
import { useRequest } from 'ahooks';
import { getOrderData } from '@/utils/apis/getOrderData';
import { DB } from '@/utils/dbConfig';
import { staleTime } from '@/utils/constant';
import SayPop from './SayPop';

interface SayType {
  _id: string;
  content: string;
  date: number;
  imgs: string[];
}

interface IProps {
  children?: ReactNode
}

const Say: FC<IProps> = () => {
  //请求数据
  const {data, loading} = useRequest(getOrderData, {
    defaultParams: [{dbName: DB.Say, sortKey:'date'}],
    retryCount: 3,
    cacheKey: `Say-${DB.Say}`,
    staleTime: staleTime
  })
  const [url, setUrl] = useState('');
  const [showPreView, setShowPreView] = useState(false);

  const handlePreView = (url: string) => {
    setShowPreView(true);
    setUrl(url);
  };

  return (
    <PageLayout  title={Title.Say} loading={loading}>
      {data?.data.map(({ _id, content, date, imgs} : SayType) => (
        <SayPop 
          key={_id} 
          content={content} 
          date={date}
          imgs={imgs}
          handlePreview={handlePreView}
        />
      ))}
      <ImgView 
        viewUrl={url}
        isViewShow={showPreView}
        onClick={()=> setShowPreView(false)}
      />
    </PageLayout>
  )
}

export default Say