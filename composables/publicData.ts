/*
* 公共属性
* AdminLoginIsShow 控制管理员登录显示隐藏
* indexSwiper 首页轮播图实例
* */
export const publicData = () => {
    return useState('data', () => {
        return {
            AppHeadHover: 0,//存放 导航栏选中了那个页面
            AdminLoginIsShow: false,//控制登录页隐藏显示
            indexSwiper: useSwiper(),//首页轮播图实例
            IPAddress:"http://43.139.254.175:8080"//访问接口地址
        }
    })
};