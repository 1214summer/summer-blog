import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import style from './index.module.scss';
import BlogCard from './BlogCard';
import AccountCard from './AccountCard';
import DataCard from './DataCard';
import TagCard from './TagCard';

interface IProps {
    children?: ReactNode
}

const Aside: FC<IProps> = () => {
    return (
        <aside className={style.aside}>
            <BlogCard />
            <AccountCard />
            <DataCard />
            <div className={style.cardSticky}>
              <TagCard />
            </div>
        </aside>
        
    )
}

export default Aside