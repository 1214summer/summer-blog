import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'


import { useTitle } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';

import PageTitle from '../PageTitle';
import style from './index.module.scss';
import Card from '../Card';

import useTop from '@/utils/hooks/useTop';
// import { siteTitle } from '@/utils/constant';

import LayoutLoading from '../LayoutLoading';

interface IProps {
    title?: string;
    className?: string;
    loading?: boolean;
    isPost?: boolean;
    classes?: string;
    date?: number;
    rows?: number;
    children?: ReactNode;
}

const PageLayout: FC<IProps> = ({
    title,
    className,
    loading,
    children,
    classes,
    date,
    isPost=false,
    rows,
}) => {
    useTitle(`${title || ''}`);
    useTop() //窗口往上滑动
    return (
      <>
        <PageTitle title={title} className={classNames( { [style.postTitle]: isPost } )}>
            {isPost && (
                <div>
                    <span className={style.articleClass}>{classes}</span>
                    <span className={style.articleDate}>
                       {dayjs(date).format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                </div>
            )}
        </PageTitle>
        <Card isStatic={true} className={classNames(style.layoutCard, className)}>
            {loading ? <LayoutLoading rows={rows} /> : children}
        </Card>
      </>
    )
}

export default PageLayout