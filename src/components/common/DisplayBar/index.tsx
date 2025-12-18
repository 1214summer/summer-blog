import React from 'react'
import type {FC, MouseEventHandler, ReactNode} from 'react'
import DisplayBarLoading from './DisplayBarLoading';
import style from './index.module.scss'

interface IProps {
    content?: string;
    right?: string;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    children?: ReactNode
}

const DisplayBar: FC<IProps> = ({ content = '', right = '', loading, onClick }) => {
    return (
      <div className={style.displayBar} onClick={onClick}>
        {loading ? (
            <DisplayBarLoading />
          ) : (
            <>
              <div className={style.content}>{content}</div>
              <div className={style.rightContent}>
                <div className={style.rightBar}>{right}</div>
              </div>
            </>
          )
        }

      </div>
    )
}

export default DisplayBar;