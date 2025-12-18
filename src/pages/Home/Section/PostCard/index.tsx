import React from 'react'
import type {FC, MouseEventHandler, ReactNode} from 'react'
import Card from '@/components/common/Card'
import dayjs from 'dayjs';

import style from './index.module.scss'
import PostCardLoading from './PostCardLoading';

interface IProps {
  title?: string;
  content?: string;
  date?: number;
  tags?: string[];
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const PostCard: FC<IProps> = ({title, content, date, tags, loading, onClick}) => {
  return (
    <Card className={style.card} isStatic={true} onClick={onClick}>
      {loading ? 
      (<PostCardLoading />)
       : 
      (
        <>
          <div className={style.title}>{title}</div>
          <p className={style.content}>
            {content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </p>
          <div className={style.info}>
            <span className={style.date}>{dayjs(date!).format('YYYY-MM-DD')}</span>
            <div className={style.tags}>
              {tags!.map(tag => (
                <span className={style.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

export default PostCard;