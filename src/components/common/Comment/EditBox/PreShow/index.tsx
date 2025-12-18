import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss';
import MarkDown from '@/components/common/MarkDown';
import classNames from 'classnames';
import sanitizeHtml from 'sanitize-html';

interface IProps {
    closePre?: Function;
    content?: string;
    className?: string;
    children?: ReactNode;
}

const PreShow: FC<IProps> = ({closePre, content, className}) => {
    const handleClose = () => closePre?.();
    return (
        <div className={classNames(style.preShow, className)}>
            <div className={style.closeBtn} onClick={handleClose}> × </div>
            <MarkDown className={style.preMarked} content={sanitizeHtml(content!)} />
        </div>
    );
};

export default PreShow;