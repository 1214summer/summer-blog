import React, {memo} from 'react';
import type {FC, ReactNode} from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

interface IProps {
  state: boolean;
  toggle: Function;
  setLeft: Function;
  setRight: Function;
  children?: ReactNode
}

const Switch: FC<IProps> = ({
  state,
  toggle,
  setLeft,
  setRight
}) => {
  return (
    <div className={style.switch}>
      <div
        className={classNames(style.site, { [style.titleOff]: state })}
        onClick={() => setLeft()}
      >
        关于本站
      </div>
      <div className={style.box} onClick={() => toggle()}>
        <div className={classNames(style.btn, { [style.isMe]: state })} />
      </div>
      <div
        className={classNames(style.me, { [style.titleOff]: !state })}
        onClick={() => setRight()}
      >
        关于我
      </div>
    </div>
  )
}

export default Switch;