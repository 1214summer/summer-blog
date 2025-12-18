import React from 'react'
import type {FC, MouseEventHandler, ReactNode} from 'react'
import style from './index.module.scss'
import classNames from 'classnames'

interface IProps {
    viewUrl: string;
    isViewShow: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    children?: ReactNode
}

const ImgView: FC<IProps> = ({viewUrl,isViewShow, onClick}) => {
    return (
        <div className={classNames(style.view, {[style.show]: isViewShow})}
          onClick={onClick}
        >
            <img className={style.img} src={viewUrl} />
        </div>
    )
}

export default ImgView;