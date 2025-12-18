import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { useRequest, useSafeState } from 'ahooks';
import { useNavigate } from 'react-router-dom';

import useUrlState from '@ahooksjs/use-url-state'
import { command, db } from '@/utils/cloudBase';
import { getWhereOrderPageSum } from '@/utils/apis/getWhereOrderPageSum';
import { DB } from '@/utils/dbConfig';
import { detailPostSize, staleTime } from '@/utils/constant';
import PageLayout from '@/components/common/PageLayout';
import { ArticleType } from '../ArticleType';
import DisplayBar from '@/components/common/DisplayBar';
import dayjs from 'dayjs';
import MyPagination from '@/components/common/MyPagination';

interface IProps {
    children?: ReactNode
}

const ArticleDetail: FC<IProps> = () => {
    const [query] = useUrlState();
    const navigate = useNavigate();
    const [page, setPage] = useSafeState(1);
    const where = query.tag?{
      tags:db.RegExp({
        regexp: `${query.tag}`,
        options: 'i'
      })
    }: {
      classes: query.class
    };

    const {data, loading} = useRequest(
      ()=>getWhereOrderPageSum({
        dbName: DB.Article,
        where: { ...where, post: command.eq(true) },
        page,
        size: detailPostSize,
        sortKey: 'date'
      }),
      {
        retryCount: 3,
        refreshDeps: [page],
        cacheKey: `ArtDetail-${DB.Article}-${JSON.stringify(where)}-${page}`,
        staleTime
      }
    );

    return (
      <PageLayout title={query.tag || query.class}>
        {data?.articles.data.map((item: ArticleType) => (
          <DisplayBar 
            key={item._id}
            content={item.title}
            right={dayjs(item.date).format('YYYY-MM-DD')}
            loading={loading}
            onClick={() => navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)}
          />
        ))}
        <MyPagination
          current={page}
          defaultPageSize={detailPostSize}
          total={data?.sum.total}
          setPage={setPage}
          autoScroll={true}
          scrollToTop={440}
        />
      </PageLayout>
    )
}

export default ArticleDetail;