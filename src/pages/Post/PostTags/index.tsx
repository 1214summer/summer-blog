import React from 'react';
import type {FC, ReactNode} from 'react';
import style from './index.module.scss';

interface IProps {
  tags: string[];
  children?: ReactNode
}

const PostTags: FC<IProps> = ({tags}) => {
  return (
    <div className={style.articleTags}>
      {tags.map((item, index) => (
        <span key={index} className={style.articleTag}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default PostTags;