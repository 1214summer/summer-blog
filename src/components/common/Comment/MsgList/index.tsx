import React from 'react'
import type {FC, ReactNode} from 'react'
import { MsgType } from '..'
import LayoutLoading from '../../LayoutLoading';
import style from './index.module.scss'


interface IProps {
    msgs?: MsgType[];
    replys?: MsgType[];
    loading?: boolean;
    replyRun?: Function;
    title?: string;
    children?: ReactNode;
}

const MsgList: FC<IProps> = ({ 
    msgs, 
    replys, 
    loading, 
    replyRun, 
    title }) => {
    return (
        <>
         {loading ? (
            <LayoutLoading />
         ) : (
            msgs?.map((msg: MsgType) => {
                return (
                    <div key={msg._id} className={style.completMsg}>

                    </div>
                )
            })
         )}
        </>
    )
}

export default MsgList