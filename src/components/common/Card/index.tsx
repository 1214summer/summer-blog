import React, {memo} from 'react'
import type {FC, MouseEventHandler, ReactNode} from 'react'
import classNames from 'classnames';
import style from './index.module.scss'
import { Skeleton } from 'antd';

interface IProps {
    className?: string;
    loading?: boolean;
    isStatic?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    children?: ReactNode;
}

const Card: FC<IProps> = ({children, className, loading, isStatic, onClick}) => {
    return(
        <div className={classNames(
            style.card, 
            {[style.center]: loading },
            {[style.active]: !isStatic},
            className
        )}
        onClick={onClick}
        >
            {/* 占位符 */}
            {loading ? <Skeleton paragraph={{ rows: 1}}/> : children}
        </div>
    )
}

export default Card;