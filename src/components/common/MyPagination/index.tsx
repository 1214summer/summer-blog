import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { useAppDispatch, useAppSelector, shallowEqualApp } from '@/store';
import { Pagination } from 'antd';

import './pagination.custom.scss';
import style from './index.module.scss';
import { changeNavShowAction } from '@/store/modules/navShow';
interface IProps {
    current?: number;
    defaultPageSize?: number;
    total?: number;
    setPage?: Function;
    scrollToTop?: number; //往上滑动多少
    autoScroll?: boolean; 
    setNavShow?: Function; 
    children?: ReactNode
}

const MyPagination: FC<IProps> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  autoScroll=false,
  scrollToTop=0
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {total > defaultPageSize ? (
        <div id='myPagination' className={style.pageBox}>
          <Pagination 
            align="center"
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page: number) => {
              setPage?.(page)
              dispatch(changeNavShowAction(false))
              autoScroll && window.scrollTo(0, scrollToTop)
            }}
          />
        </div>
      ) : null }
    </>
  )
}

export default MyPagination;