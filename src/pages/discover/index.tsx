import React, {memo, Suspense} from 'react'
import type {FC, ReactNode} from 'react'
import {Link, Outlet} from 'react-router-dom'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
    <div >
        <div>
            <Link to="/discover/recommend">推荐</Link>
        </div>
        <Suspense fallback="">
            <Outlet />
        </Suspense>

    </div>
    )

}

export default memo(Discover)