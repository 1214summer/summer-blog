import { useBoolean } from 'ahooks';
import classNames from 'classnames';
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss';

interface IProps {
    _id?: string;
    avatar?: string;
    link?: string;
    name?: string;
    date?: number;
    content?: string;
    email?: string;
    isReply?: boolean;
    replyRun?: Function;
    title?: string;
    children?: ReactNode
}

const MsgItem: FC<IProps> = ({
        _id,
        avatar,
        link,
        name,
        date,
        content,
        email,
        isReply,
        replyRun,
        title
}) => {
    const [showReply, {toggle:toggleReply, setFalse: closeReply}] = useBoolean(false);
    //const{ imgRef, imgUrl} = useLazyIm
    return (
      <div
        className={classNames(style.commentItem, {
          [style.marginLeft]:isReply
        })}
      >
        <div className={style.flex}>
            {/* <div ref={imgRef}></div> */}
        </div>
        
      </div>
    )
}

export default memo(MsgItem)