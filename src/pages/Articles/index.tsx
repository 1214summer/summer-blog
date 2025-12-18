import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import PageLayout from '@/components/common/PageLayout';
import MyPagination from '@/components/common/MyPagination';
import { DB } from '@/utils/dbConfig';
import { getWhereOrderPageSum } from '@/utils/apis/getWhereOrderPageSum';
import { command } from '@/utils/cloudBase';
import { detailPostSize, staleTime } from '@/utils/constant';

import { Title } from '../pageTitle';
import ArticleList from './ArticleList';
import Search from './Search';

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);

  const [where, setWhere] = useSafeState(() => ({}));

  const { data, loading, run } = useRequest(
    () =>
      getWhereOrderPageSum({
        dbName: DB.Article,
        where: { ...where, post: command.eq(true) },
        page,
        size: detailPostSize,
        sortKey: 'date'
      }),
    {
      retryCount: 3,
      refreshDeps: [where,page],
      cacheKey: `Articles-${DB.Article}-${JSON.stringify(where)}-${page}`,
      staleTime
    }
  );

  return (
    <PageLayout title={Title.Articles}>
      <Search page={page} setPage={setPage} where={where} setWhere={setWhere} run={run} />
      <ArticleList articles={data?.articles.data} loading={loading} />
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={data?.sum.total}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={440}
      />
    </PageLayout>
  );
};

export default Articles;