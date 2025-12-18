import React, {memo,useRef} from 'react'
import type {FC, ReactNode} from 'react'
import { useKeyPress, useSafeState} from 'ahooks';
import { authLogin } from '@/utils/apis/authLogin';
import { message } from 'antd';
import { myAvatar70, myEmail, myLink, myName } from '@/utils/constant';
import classNames from 'classnames';
import style from './index.module.scss'

interface IProps {
    showAdmin?: boolean;
    setShowAdmin?: Function;
    setName?: Function;
    setEmail?: Function;
    setLink?: Function;
    setAvatar?: Function;
    children?: ReactNode
}

const AdminBox: FC<IProps> = ({
    showAdmin=false,
    setShowAdmin,
    setName,
    setEmail,
    setLink,
    setAvatar

}) => {
    const pwdRef = useRef(null);
    const [adminEmail, setAdminEmail] = useSafeState('');
    const [adminPwd, setAdminPwd] = useSafeState('');
  
    const hideAdmin = ()=> {
        setShowAdmin?.(false);
        setAdminEmail('');
        setAdminPwd('')
    };
    const adminLogin = async() => {
        if(await authLogin(adminEmail!, adminPwd!)){
            message.success('登陆成功！')
            setName?.(myName);
            setEmail?.(myEmail);
            setLink?.(myLink);
            setAvatar?.(myAvatar70);
            hideAdmin();
        }else{
            message.error('登陆失败，请重试！');
        }
    };
    useKeyPress(13, adminLogin, {
        target: pwdRef
    })

    return (
        <div className={classNames(style.adminBox, { [style.showAdmin]: showAdmin })}>
            <div className={style.itemBox}>
                <div className={style.adminKey}>邮箱</div>
                <input 
                  type="text"
                  className={style.adminValue}
                  value={adminEmail}
                  onChange={e => setAdminEmail(e.target.value)}
                />
            </div>
            <div className={style.itemBox}>
                <div className={style.adminKey}>密码</div>
                <input
                  ref={pwdRef}
                  type="password"
                  className={style.adminValue}
                  value={adminPwd}
                  onChange={e => setAdminPwd(e.target.value)}
                />
            </div>
            <div className={classNames(style.itemBox, style.adminBtns)}>
                <div className={style.adminBtn} onClick={hideAdmin}>
                    取消
                </div>
                <div className={style.adminBtn} onClick={adminLogin}>
                    登录
                </div>
            </div>
        </div>
    )
}

export default memo(AdminBox)