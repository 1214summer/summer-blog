import React, {memo} from 'react';
import type {FC, ReactNode} from 'react';
import style from './index.module.scss';
import { staleTime } from '@/utils/constant';
import { DB } from '@/utils/dbConfig';
import Card from '@/components/common/Card';
import { getWhereData } from '@/utils/apis/getWhereData';
import { useRequest } from 'ahooks';
interface IProps {
    children?: ReactNode
}

const TagCard: FC<IProps> = () => {
  const {data: tags, loading} = useRequest(getWhereData,{
    defaultParams: [DB.Tag],
    retryCount: 3,
    cacheKey: `TagCard-${DB.Tag}`,
    staleTime
  });

  return (
    <Card className={style.card} loading={loading}>
      {tags?.data?.map(
        (item: { _id: string; tag: string }, index: number) => (
          <span className={style.tag} key={index}>
            {item.tag}
          </span>
        )
      )}
    </Card>
  )
}
export default TagCard;