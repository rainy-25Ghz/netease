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
// 推荐歌单
// 说明 : 调用此接口 , 可获取推荐歌单
// 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
// 接口地址 : /personalized
// 调用例子 : /personalized?limit=1
const RECOMMEND_LIST_URL = '/personalized';
export const recommendListApi = (number) => {
    const url = RECOMMEND_LIST_URL.concat(`?limit=${number}`);
    return fetch(url)
        .then(res => res.json())
        .then(json => json.result ? json.result : undefined)
        .catch(err => { console.log(err); });
}

//独家放送(入口列表)
// 说明 : 调用此接口 , 可获取独家放送

// 接口地址 : /personalized/privatecontent

// 调用例子 : /personalized/privatecontent
const EXCLUSIVE_LIST_URL = '/personalized/privatecontent';
export const exclusiveListApi = () => {
    return fetch(EXCLUSIVE_LIST_URL)
        .then(res => res.json())
        .then(json => json.result ? json.result : undefined)
        .catch(err => { console.log(err); });
}
// 新歌速递
// 说明 : 调用此接口 , 可获取新歌速递

// 必选参数 :

// type: 地区类型 id,对应以下:

// 全部:0

// 华语:7

// 欧美:96

// 日本:8

// 韩国:16
// 接口地址 : /top/song

// 调用例子 : /top/song?type=96
const NEW_SONGS_URL = '/top/song?type=0';
export const newSongsApi = () => {
    return fetch(NEW_SONGS_URL)
        .then(res => res.json())
        .then(json => json.data ? json.data : undefined)
        .catch(err => { console.log(err); });
}

// 推荐 mv
// 说明: 调用此接口, 可获取推荐 mv

// 接口地址: /personalized/mv

// 调用例子: /personalized/mv