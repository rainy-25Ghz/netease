import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NewSongs from './NewSongs';
import MyTabs from './MyTabs';
import Carousel from './Carousel';
import { ListPage } from './ListPage/ListPage';
import { RecommendLists } from './RecommendLists';
import { ListHeader } from './ListHeader';
import { ExclusiveList } from './ExclusiveList';
import RecommendMv from './RecommendMv';
import RecommendDj from './RecommendDj';
import { useSelector } from 'react-redux';
import { selectTabId } from '../features/switchTab/switchTabSlice';

export const PersonalPage = () => {
    return (
        <Fragment>
            <Carousel />
            <ListHeader text="推荐歌单" />
            <RecommendLists />
            <ListHeader text="独家放送" />
            <ExclusiveList />
            <ListHeader text="最新音乐" />
            <NewSongs />
            <ListHeader text="推荐MV" />
            <RecommendMv />
            <ListHeader text="主播电台" />
            <RecommendDj />
            <div style={{ height: '100px' }}></div>
        </Fragment>
    )
}

export const DjPage = () => {
    return (
        <div>page2</div>
    )
}
export default function MainPage({ clsName }) {
    const tabId = useSelector(selectTabId);
    let ret;
    switch (tabId) {
        case 0: ret = (
            <main style={{ backgroundColor: '#ffffff', width: "100%", height: "100vh" }} className={clsName} id="scrollBarscrollBar">
                <Toolbar style={{ Height: '28' }} />
                <MyTabs />
                <PersonalPage />
            </main>);
            break;
        case 1: ret = (
            <main style={{ backgroundColor: '#ffffff', width: "100%", height: "100vh" }} className={clsName} id="scrollBarscrollBar">
                <Toolbar style={{ Height: '28' }} />
                <MyTabs />
                <ListPage />
            </main>); break;
        default: ret = (<main style={{ backgroundColor: '#ffffff', width: "100%", height: "100vh" }} className={clsName} id="scrollBarscrollBar">
            <Toolbar style={{ Height: '28' }} />
            <MyTabs />
            <div>default</div>
        </main>);
    }
    return ret
    // return (
    //     <main style={{ backgroundColor: '#ffffff' }} className={clsName} id="scrollBarscrollBar">
    //         <Toolbar style={{ Height: '28' }} />
    //         <MyTabs />
    //         {tabId === 0 ? <PersonalPage /> : tabId === 1 ? <ListPage /> : tabId === 2 ? <DjPage /> : <ListPage />}
    //     </main>
    // )
}
