import React, {memo} from 'react';
import type {FC, ReactNode} from 'react';

import PageTitle from '@/components/common/PageTitle';

import style from './index.module.scss'

interface IProps {
    children?: ReactNode
}

const Home: FC<IProps> = () => {
    return <div>Home</div>
}

export default memo(Home)