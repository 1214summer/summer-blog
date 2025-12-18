import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { useNavigate } from 'react-router-dom';

import style from './index.module.scss'

import PostCard from './PostCard';
import { useMount, useRequest, useSafeState } from 'ahooks';
import { DB } from '@/utils/dbConfig';
import { homeSize, staleTime } from '@/utils/constant';
import { getPageData } from '@/utils/apis/getPageData';
import MyPagination from '@/components/common/MyPagination'
import { command } from '@/utils/cloudBase';
import { useSelector } from 'react-redux';
import { shallowEqualApp, useAppSelector } from '@/store';
import { getWhereSum } from '@/utils/apis/getWhereSum';

interface Article {
  classes: string;
  content: string;
  date: number;
  tags: string[];
  title: string;
  titleEng: string;
  url: string;
  _id: string;
}

interface IProps {
  total?: number;
  children?: ReactNode
}

const Section: FC<IProps> = () => {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1)
  const {artSum} =  useAppSelector(
    (state) => ({
      artSum: state.articles.count
    }),
    shallowEqualApp
  )
  
  const {data: articles, loading: articleLoading} = useRequest(
    () => getPageData({
      dbName: DB.Article,
      where: {post: command.eq(true)},
      sortKey: 'date',
      isAsc: false,
      page,
      size: homeSize
    }),
    {
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `Section-${DB.Article}-${page}`,
      staleTime: staleTime
    }
  )

  //还没有更新articleSum
  // const {data: artTotal, loading: articleSumLoading} = useRequest(
  //   () => getWhereSum( DB.Article,{post: command.eq(true)}),
  //   {
  //     retryCount: 3,
  //     manual:true,
  //     cacheKey: `Section-${DB.Article}-${page}`,
  //     staleTime: staleTime
  //   }
  // )

  return (
    <section className={style.section}>
      {articles?.data.map(({ _id, title, content, date, tags, titleEng }: Article) => (
        <PostCard
          key={_id}
          title={title}
          content={content}
          date={date}
          tags={tags}
          loading={articleLoading}
          onClick={() => navigate(`/post?title=${encodeURIComponent(titleEng)}`)}
        />
      ))}
      <MyPagination
          current={page}
          defaultPageSize={homeSize}
          total={artSum}
          setPage={setPage}
          autoScroll={true}
          scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  )
}

export default Section;