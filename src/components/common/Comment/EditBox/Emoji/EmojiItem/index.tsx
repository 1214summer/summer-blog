import React from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss'
import copy from 'copy-to-clipboard';
import { message } from 'antd';

interface IProps {
    emojiStr: string[];
    children?: ReactNode;
}

const EmojiItem: FC<IProps> = ({ emojiStr }) => {
    return (
      <>
        {emojiStr.map((item: string, index:number) => {
            <div
              className={style.emoji}
              key = {index}
              onClick={() => {
                copy(item) && message.success('已复制到剪切板!');
              }}
            >
                {item}
            </div>
        })}
      </>
    )
}

export default EmojiItem