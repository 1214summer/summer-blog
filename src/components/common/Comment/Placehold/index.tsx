import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

import style from './index.module.scss'

interface IProps {
    msgCount?: number;
    isMsg?: boolean;
    children?: ReactNode
}

const PlaceHolder: FC<IProps> = ({msgCount, isMsg}) => {
    return (
      <>
        {msgCount ? (
           <div>
            {msgCount}条{isMsg ? '留言' : '评论'}
           </div> 
        ):(
            <div className={style.noMsg}>暂时没有{isMsg ? '留言' : '评论'}&nbsp;~</div>
        )}
      </>
    )
}

export default memo(PlaceHolder)