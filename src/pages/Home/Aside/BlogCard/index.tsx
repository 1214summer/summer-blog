import { useTime } from '@/utils/hooks/useTime'
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import Card from '@/components/common/Card';
import style from './index.module.scss'
import{cardUrl} from '@/utils/constant'

interface IProps {
    children?: ReactNode
}

const BlogCard: FC<IProps> = () => {
    const timeText = useTime();

    return (
       <Card className={style.card}>
          <p className={style.text}>
            {timeText}<br />
            我是<span className={style.color}>summer</span> <br />
            欢迎来到<br />
            我的个人博客
          </p>
          {/* TODO  讲图片转成webp格式 */}
          <img src={cardUrl} className={style.avatar} alt="summer"/>
       </Card> 
    );
};

export default BlogCard