import MarkDown from '@/components/common/MarkDown';
import PageLayout from '@/components/common/PageLayout';
import { getWhereData } from '@/utils/apis/getWhereData';
import { command } from '@/utils/cloudBase';
import { staleTime } from '@/utils/constant';
import { DB } from '@/utils/dbConfig';
import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss'
import PostTags from './PostTags';
import NavBar from './NavBar';

interface IProps {
    children?: ReactNode
}

const Post: FC<IProps> = () => {
  const [search] = useUrlState();

  const {data, loading} = useRequest(getWhereData, {
    defaultParams:[DB.Article, { titleEng: command.eq(search.title), post: command.eq(true) }],
    retryCount: 3,
    cacheKey: `Post-${DB.Article}-${search.title}`,
    staleTime
  });

  return (
    <PageLayout
      title={data?.data[0].title}
      loading={loading}
      classes={data?.data[0].classes}
      date={data?.data[0].date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={data?.data[0].content} className={style.mb} />
      <PostTags tags={data?.data[0].tags} />
      <NavBar content={data?.data[0].content} />
    </PageLayout>
  )
}

export default memo(Post)