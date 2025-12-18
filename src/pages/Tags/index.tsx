import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss';
import { Title } from '../pageTitle';
import { staleTime } from '@/utils/constant';
import { useNavigate } from 'react-router';
import { useRequest } from 'ahooks';
import { getData } from '@/utils/apis/getData';
import { DB } from '@/utils/dbConfig';
import PageLayout from '@/components/common/PageLayout';

interface IProps {
  children?: ReactNode
}

interface TagType {
  _id: string;
  tag: string;
}

const Tags: FC<IProps> = () => {
  const navigate = useNavigate();
  const {data, loading} = useRequest(getData,{
    defaultParams:[DB.Tag],
    retryCount:3,
    cacheKey: `Tags-${DB.Tag}`,
    staleTime
  })
  return (
    <PageLayout title={Title.Tags} loading={loading} className={style.tagsBox} rows={3}>
    {data?.data.map((item: TagType) => (
      <span
        className={style.tagItem}
        key={item._id}
        onClick={() => navigate(`/articleDetail?tag=${encodeURIComponent(item.tag)}`)}
      >
        {item.tag}
      </span>
    ))}
  </PageLayout>
  )
}

export default Tags;