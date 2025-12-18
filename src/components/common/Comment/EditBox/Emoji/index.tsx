import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'

import './index.custom.scss';
import style from './index.module.scss';
import {useEmoji} from './useEmoji';
import { Popover } from 'antd';
import classNames from 'classnames';
import EmojiItem from './EmojiItem';

interface EmojiType {
    className: string;
    emojiStr: string[];
    show: string;
}

interface IProps {
    children?: ReactNode
}

const Emoji: FC<IProps> = () => {
    const { emojiPeople, emojiNature, emojiSymbol, emojiFood } = useEmoji();
    
    const emojiData: EmojiType[] = [
        {
          className: '',
          emojiStr: emojiPeople,
          show: '😜'
        },
        {
          className: style.emoji2,
          emojiStr: emojiNature,
          show: '✉️'            
        },
        {
          className: style.emoji3,
          emojiStr: emojiSymbol,
          show: '🆗'
        },
        {
          className: style.emoji4,
          emojiStr: emojiFood,
          show: '🍎'
        }
    ];

    return (
        <>
         {emojiData.map((item, index)=> {
             <Popover
               key={index}
               className={classNames(style.emojiBtn, item.className)}
               openClassName={style.emojiCOntent}
               placement='bottom'
               content={<EmojiItem emojiStr={item.emojiStr} />}
               trigger='click'
             >
                <div>{item.show}</div>
             </Popover>
         })}
        </>
    )
}

export default memo(Emoji)