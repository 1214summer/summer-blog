import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss';
import dayjs from 'dayjs';

interface IProps {
  date: number;
  logContent: string[];
  children?: ReactNode
}

const TimeItem: FC<IProps> = ({date, logContent}) => {
    return (
      <div className={style.item}>
        <div className={style.time}>
          <div className={style.dot} >
            <div className={style.dotIn}/>
          </div>
          {dayjs(date).format('YYYY-MM-DD')}
        </div>

        <ul className={style.content}>
          {logContent.map((log, index) => (
            <li key={index} className={style.timeLi}>
              {log}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default TimeItem;