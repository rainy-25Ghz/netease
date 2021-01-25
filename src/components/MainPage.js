import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NewSongs from './NewSongs';
import MyTabs from './MyTabs';
import Carousel from './Carousel';
import { useEffect } from 'react';
import { bannerApi } from '../services/service';
import { RecommendLists } from './RecommendLists';
import { ListHeader } from './ListHeader';
import { ExclusiveList } from './ExclusiveList';
export default function Main({ clsName }) {
    const [srcs, setSrcs] = React.useState([]);
    useEffect(() => {
        bannerApi().then(res => {
            setSrcs(res);
            //console.log(res);
        })
    }, []);
    return (

        <main style={{ backgroundColor: '#ffffff' }} className={clsName} id="scrollBarscrollBar">
            <Toolbar style={{ Height: '28' }} />
            <MyTabs />
            <Carousel srcs={srcs} />
            <ListHeader text="推荐歌单" />
            <RecommendLists />
            <ListHeader text="独家放送" />
            <ExclusiveList />
            <ListHeader text="最新音乐" />
            <NewSongs />
            <ListHeader text="推荐MV" />
            <RecommendLists />
            <ListHeader text="主播电台" />
            <RecommendLists />
            <ListHeader text="听听" />
            <RecommendLists />
            <ListHeader text="看看" />
            <RecommendLists />

        </main>
    )
}