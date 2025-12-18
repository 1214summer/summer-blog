import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { avatarImg } from '@/utils/constant';
import style from './index.module.scss'
import dayjs from 'dayjs'

interface IProps {
    content: string;
    date: number;
    imgs: string[];
    handlePreview: (url: string) => void;
    children?: ReactNode
}

const SayPop: FC<IProps> = ({
    content,
    date,
    imgs,
    handlePreview
}) => {
    return (
      <div className={style.sayItem}>
        <div className={style.avatarBox}>
           <img src={avatarImg} className={style.avatar} />
        </div>

        <div className={style.contentBox}>
            <div className={style.content}>
                {content}
                <span className={style.date}>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</span>
                {!!imgs?.length && (
                    <div className={style.sayImgsBox}>
                        {imgs.map((img, index) => (
                        <div key={index} className={style.sayImg} onClick={() => handlePreview(img)}>
                            <img src={img} />
                        </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    )
}

export default SayPop;