import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss'
import { Popover } from 'antd'

interface IProps {
    isLink: boolean;
    link?: string;
    content?: ReactNode;
    children?: ReactNode
}

const IconBtn: FC<IProps> = ({isLink, link, content, children}) => {
    return isLink ? (
        <a href={link} className={style.socialBtn}>
          {children}
        </a>
    ): (
        <Popover
            trigger = 'hover'
            className={style.socialBtn}
            content={content}
            classNames={{ root: style.card }}
        >
            {children}
        </Popover>
    )
}

export default IconBtn