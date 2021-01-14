const LOGIN_PHONE_URL = '/login/cellphone';
export const loginApi = (phone, password) => {
    const url = LOGIN_PHONE_URL.concat(`?phone=${phone}&password=${password}`);
    return fetch(url).then(res => res.json()).then(json => { return json; }).catch(err => {
        return err;
    });
}
// 获取用户信息 , 歌单，收藏，mv, dj 数量
// 说明 : 登录后调用此接口 , 可以获取用户信息
const USER_INFO = '/user/subcount';
export const infoApi = (uid) => {
    const url = USER_INFO.concat(`?uid=${uid}`);
    return fetch(url).then(res => res.json()).then(json => { return json; }).catch(err => {
        return err;
    });
}

// 获取用户歌单
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/playlist
// 调用例子 : /user/playlist?uid=32953014
// 返回数据如下图 : 用户歌单
const PLAY_LIST_URL = 'user/playlist';
export const playListApi = (uid) => {
    const url = PLAY_LIST_URL.concat(`?uid=${uid}`);
    return fetch(url).then(res => res.json()).catch(err => { console.log(err); });
}

// banner
// 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
// 可选参数 :
// type:资源类型,对应以下类型,默认为 0 即PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
// 接口地址 : /banner
// 调用例子 : /banner, /banner?type=2
const BANNER_URL = '/banner';
export const bannerApi = () => {
    return fetch(BANNER_URL)
        .then(res => res.json())
        .then(json => json.banners)
        .then(banners => banners.map(value => value.imageUrl))
        .catch(err => { console.log(err); });
}