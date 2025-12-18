import './index.custom.scss';

//图标
import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined
} from '@ant-design/icons';
//ahook
import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect
} from 'ahooks';

import { Drawer } from 'antd';
import classNames from 'classnames';
import React, {memo} from 'react'
import type {FC, ReactNode} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/store';
import { changeModeAction } from '@/store/modules/mode';
import { changeNavShowAction } from '@/store/modules/navShow'

//githubURL
import {githubUrl} from '@/utils/constant'
import { modeMap, modeMapArr } from '@/utils/modeMap';
//导航栏内容
import { useLinkList } from './config';
import style from './index.module.scss'


interface IProps {
    children?: ReactNode
}

const bodyStyle = window.document.getElementsByTagName('body')[0].style;

const Nav: FC<IProps> = () => {
    //导航栏
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    //获取状态
    const {modeIndex,navShow} = useAppSelector(
      (state) => ({
        modeIndex: state.mode.modeIndex,
        navShow: state.navShow.navShow,
      }),
      shallowEqualApp
    )
    //localstorage主题颜色
    const [_, setLocalMode] = useLocalStorageState('localMode');
    const themeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)'];
    //导航栏内容
    const { navArr, secondNavArr, mobileNavArr } = useLinkList();
    const [visible, setVisible] = useSafeState(false);


    useEventListener(
      'wheel' in window ? 'wheel' : 'mousewheel',
      (e: Event) => {
        const wheelEvent = e as WheelEvent;
        const delta = wheelEvent.deltaY || -(e as any).wheelDeltaY || 0;
        dispatch(changeNavShowAction(delta < 0));
      },
      { target: document.body }
    );

    useUpdateEffect(() => {
      setLocalMode(modeIndex);
      for (const type of modeMapArr){
        bodyStyle.setProperty(type, modeMap[type as keyof typeof modeMap][modeIndex!])
      }
    },[modeIndex])

    return (
        <>
            <nav className={classNames(style.nav, {[style.hiddenNav]: !navShow })}>
                <div className={style.navContent}>
                    {/* 主页 */}
                    <div className={style.homeBtn} onClick={() => navigate('/')}>
                        <HomeOutlined />
                    </div>

                    {/* 后台管理 */}
                    <a className={style.adminBtn} href={githubUrl} target='_blank'>
                        <SettingOutlined />
                    </a>

                    {/* 主题切换 */}
                    <div className={style.themeBtn}>
                        <BgColorsOutlined />
                        <div className={style.themeOpions}>
                            {themeOptions.map((backgroundColor, index) => (
                            <div
                                key={index}
                                style={{backgroundColor}}
                                className={classNames(style.themeItem, style[`themeItem${index}`])}
                                onClick={() =>  dispatch(changeModeAction(index))}
                            >
                                <CheckOutlined  style={{display: modeIndex === index ? 'block' : 'none'}} />
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* 文章单独按钮 */}
                    <div className={style.articlesBtn}>
                        <div className={style.articlesSecond}>
                          {secondNavArr.map((item, index) => (
                            <NavLink
                              className={({isActive}) => 
                                isActive ? style.sedActive : style.articlesSecondItem
                              }
                              to={item.to}
                              key={index}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                        文章
                    </div>

                    {/* 其他按钮 */}
                    {navArr.map((item, index) => (
                        <NavLink
                        className={({ isActive }) => (isActive ? style.navActive : style.navBtn)}
                        to={item.to}
                        key={index}
                        >
                        {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
            {/* 移动端按钮 */}
            <div 
              className={style.mobileNavBtn}
              onClick={() => setVisible(true)}
            >
              <MenuOutlined />  
            </div>
            {/* 抽屉内容 */}
            <Drawer
              placement='right'
              onClose={() => setVisible(false)}
              open={visible}
              className='mobile-nav-box'
            >
              <div className={style.mobileNavBox}>
                {/* 导航按钮 */}
                {mobileNavArr.map((item, index) => (
                        <NavLink
                        className={({ isActive }) =>
                          isActive ? style.mobileNavActive : style.mobileNavItem
                        }
                          to={item.to}
                          key={index}
                        >
                            {item.name}
                        </NavLink>
                ))}
                {/* 主题切换 */}
                {themeOptions.map((backgroundColor, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor }}
                    className={classNames(style.modeItem, style[`themeItem${index}`])}
                    onClick={() =>dispatch(changeModeAction(index))}
                  >
                    {modeIndex === index && <CheckOutlined />}
                  </div>
                ))}
              </div>
            </Drawer>
        </>
    )
}

export default Nav