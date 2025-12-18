import PageLayout from '@/components/common/PageLayout';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';
import { DB } from '@/utils/dbConfig';
import { useRequest } from 'ahooks';
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { Title } from '../pageTitle';
import TimeItem from './TimeItem';

interface IProps {
    children?: ReactNode
}

interface Log {
  _id: string;
  date: number;
  logContent: string[];
}

const Log: FC<IProps> = () => {
  const { data: logs, loading } = useRequest(getOrderData, {
    defaultParams: [{dbName: DB.Log, sortKey: 'date'}],
    retryCount: 3,
    cacheKey: `Log-${DB.Log}`,
    staleTime
  })
  
  return (
    <PageLayout title={Title.Log} loading={loading}>
      {logs?.data.map(({_id, date, logContent}:Log) => (
        <TimeItem key={_id} date={date} logContent={logContent} />
      ))}
    </PageLayout>
  )
}

export default Log;