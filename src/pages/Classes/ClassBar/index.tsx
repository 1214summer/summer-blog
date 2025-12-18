import React, {memo} from 'react'
import type {FC, MouseEventHandler, ReactNode} from 'react'
import style from './index.module.scss'
import classNames from 'classnames';

interface IProps {
  content: string;
  num: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const ClassBar: FC<IProps> = ({
  content,
  num,
  className,
  onClick
}) => {
  return (
    <div className={classNames(style.classBar, className)} onClick={onClick}>
      {content}
      <div className={style.classNum}>{num}</div>
    </div>
  )
}

export default ClassBar;