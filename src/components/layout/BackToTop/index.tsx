import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/store';
import { changeNavShowAction } from '@/store/modules/navShow'

import style from './index.module.scss'

interface IProps {
    children?: ReactNode
}

const BackToTop: FC<IProps> = () => {
    
    const dispatch = useAppDispatch();
    const backTop = () =>{
        dispatch(changeNavShowAction(true));
    };
    return(
     <BackTop duration={700} visibilityHeight={300} onClick={backTop} className='BackTop'>
        <div className={style.backTop}>
            <VerticalAlignTopOutlined />
        </div>
     </BackTop>
    ) 
}

export default memo(BackToTop)