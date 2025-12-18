import { githubUrl, juejinUrl, weChatQRCode, QQ_QRCode} from '@/utils/constant';
import React from 'react'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import Juejin from './juejin';

export const useAccount = ()=>{
    const QRStyle = {width: '120px', height:'120px'};
    return [
        {
            isLink: true,
            link: githubUrl,
            ico: <GithubOutlined />,
            content: null
        },
        {
            isLink: true,
            link: juejinUrl,
            ico: <Juejin />,
            content: null
        },
        {
            isLink: false,
            link: '',
            ico: <WechatOutlined />,
            content: <img src={weChatQRCode} style={QRStyle}/>
        },
        {
            isLink: false,
            link: '',
            ico: <QqOutlined />,
            content: <img src={QQ_QRCode} style={QRStyle}/>
        }
    ]
}
