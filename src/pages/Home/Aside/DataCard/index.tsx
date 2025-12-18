import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { changeArtSum } from '@/store/modules/articles'
import { useNavigate } from 'react-router'
import { fetchData} from './fetchData';
import { useRequest } from 'ahooks';
import { staleTime } from '@/utils/constant';
import { DB } from '@/utils/dbConfig';
import { useAppDispatch } from '@/store';
import Card from '@/components/common/Card';
import style from './index.module.scss'

interface IProps {
    children?: ReactNode
}

const DataCard: FC<IProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {data, loading} = useRequest(fetchData, {
    retryCount: 3,
    cacheKey: `DataCard-count-${DB.Article}-${DB.Class}-${DB.Tag}`,
    staleTime,
    onSuccess: data => {
      dispatch(changeArtSum!(data?.articles.total))
    }
  })
  return (
    <Card className={style.card} loading={loading}>
      <div className={style.blogData} onClick={() => navigate('/articles')}>
        <div className={style.name}>文章</div>
        <div className={style.num}>{data?.articles.total}</div>
      </div>
      <div className={style.blogData} onClick={() => navigate('/classes')}>
        <div className={style.name}>分类</div>
        <div className={style.num}>{data?.classes.total}</div>
      </div>
      <div className={style.blogData} onClick={() => navigate('/tags')}>
        <div className={style.name}>标签</div>
        <div className={style.num}>{data?.tags.total}</div>
      </div>
    </Card>
  )
}

export default DataCard;