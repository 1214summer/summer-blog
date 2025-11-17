import classNames from 'classnames';
import React from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss'

interface IProps {
    title?: string;
    desc?: string;
    className?: string;
    children?: ReactNode
}

const PageTitle: FC<IProps> = ({title, desc, className, children}) => {
    return (
        <div className={classNames(style.box, className)}>
            <div className={style.title}>{title}</div>
            {desc && <div className={style.desc}>{desc}</div>}
            {children}
        </div>
    );
};

export default PageTitle