import React from 'react'
import type {FC, ReactNode} from 'react'
import './index.custom.scss';
import { useBoolean } from 'ahooks';
import style from './index.module.scss';
import { changeNavShowAction } from '@/store/modules/navShow';
import MarkNav from 'markdown-navbar';
import classNames from 'classnames';
import { useAppDispatch } from '@/store';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
interface IProps {
  content?: string;
  children?: ReactNode;
}

const NavBar: FC<IProps> = ({content}) => {
  const dispatch = useAppDispatch();
  const [visible, { setTrue: openDrawer, setFalse: closeDrawer }] = useBoolean(false);
  return (
    <>
      <MarkNav
        className={classNames('postNavBar', style.navBar)}
        source={content || ''}
        headingTopOffset={15}
        ordered={false}
        updateHashAuto={false}
        onNavItemClick={() => dispatch(changeNavShowAction?.(false))}
      />
      <div className={style.hoverBar} onClick={openDrawer}>
        <MenuFoldOutlined />
      </div>
      {/* 中层抽屉 */}
      <Drawer
        placement='right'
        onClose={closeDrawer}
        visible={visible}
        className={classNames(style.drawer, 'mobile-navBar-box')}
        width={340}
      >
        <MarkNav
          className='postNavBar'
          source={content || ''}
          headingTopOffset={15 + 60}
          ordered={false}
          updateHashAuto={false}
          onNavItemClick={() =>dispatch(changeNavShowAction?.(false))}
        />
      </Drawer>
    </>
  )
}

export default NavBar;