import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/common/DisplayBar';
import { ArticleType } from '@/pages/ArticleType';

import style from './index.module.scss';

interface Props {
  articles?: ArticleType[];
  loading?: boolean;
}

const ArticleList: React.FC<Props> = ({ articles, loading }) => {
  const navigate = useNavigate();

  return (
    <>
      {articles?.length ? (
        articles?.map((item: ArticleType) => (
          <DisplayBar
            key={item._id}
            content={item.title}
            right={dayjs(item.date).format('YYYY-MM-DD')}
            onClick={() => navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)}
            loading={loading}
          />
        ))
      ) : (
        <div className={style.none}>暂时无相应文章 ~</div>
      )}
    </>
  );
};

export default ArticleList;
