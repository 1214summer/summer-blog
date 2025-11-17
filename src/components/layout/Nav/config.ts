export const useLinkList = () => {
    const navArr = [
        {name: '说说', to: '/say'},
        {name: '留言', to: '/msg'},
        {name: '友链', to: '/link'},
        {name: '作品', to: '/show'},
        {name: '日志', to: '/log'},//建站日志
        {name: '关于', to: '/about'},//网站相关内容
    ];

    const secondNavArr = [
        {name: '找文章', to: '/articles'},
        {name: '分类', to: '/classes'},
        {name: '标签', to: '/tags'},
    ]

    //移动端导航栏
    const mobileNavArr = [
        {name: '主页', to:'/'},
        {name: '文章', to:'/articles'},
        {name: '分类', to:'/classes'},
        {name: '标签', to:'/tags'},
        {name: '说说', to:'/say'},
        {name: '留言', to:'/msg'},
        {name: '友链', to:'/link'},
        {name: '作品', to:'/show'},
        {name: '日志', to:'/log'},
        {name: '关于', to:'/about'}
    ]

    return {
        navArr,
        secondNavArr,
        mobileNavArr
      };
}