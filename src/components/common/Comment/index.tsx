import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { useRequest, useSafeState } from 'ahooks';
import { fetchData } from './fetchData';
import {DB} from '@/utils/dbConfig';
import { command } from '@/utils/cloudBase';
import { msgSize } from '@/utils/constant';
import { getWhereOrderData } from '@/utils/apis/getWhereOrderData';

interface IProps {
    titleEng?: string;
    autoScroll?: boolean;
    scrollToTop?: number;
    title?: string;
    children?: ReactNode;
}

export interface MsgType {
    avatar?: string;
    content?: string;
    date?: number;
    email?: string;
    link?: string;
    name?: string;
    replyId?: string;
    _id?: string;
}

const Comment: FC<IProps> = ({titleEng, autoScroll, scrollToTop, title}) => {
   const [page, setPage] = useSafeState(1);
   //评论
   const {
    data: msgData,
    loading: msgLoading,
    run: msgRun
   } = useRequest(
    ()=> fetchData({
        dbName: DB.Msg,
        where: {
            postTitle: titleEng,
            replyId: command.eq(''),
        },
        page,
        size: msgSize,
        sortKey: 'date'
    }),
    {
        retryCount: 3,
        refreshDeps: [page],
        onSuccess: () => {
            replyRun();
        }
    }
   )

   //回复
const {
    data: replys,
    loading: replyLoading,
    run: replyRun
} = useRequest(
    () =>
      getWhereOrderData({
        dbName: DB.Msg,
        where: {
          postTitle: titleEng,
          replyId: command.in(msgData?.msg.data.map((item: MsgType) => item._id))
        },
        sortKey: 'date',
        isAsc: true
      }),
    {
      manual: true,
      retryCount: 3
    }
);

    return (
        <div>
            
        </div>
    )
}

export default Comment;