import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { useAccount } from './useAccount'
import Card from '@/components/common/Card'
import style from './index.module.scss'
import IconBtn from './IconBtn'

interface IProps {
    children?: ReactNode
}

const AccountCard: FC<IProps> = () => {
    const accounts=useAccount();
    return (
        <Card className={style.card}>
            {accounts.map(({isLink, link, ico, content}, index) => (
                <IconBtn isLink={isLink} link={link} content={content} key={index}>
                    {ico}
                </IconBtn>
            ))}
        </Card>
    )
}

export default AccountCard