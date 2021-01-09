import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import GetAppIcon from '@material-ui/icons/GetApp';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import RadioIcon from '@material-ui/icons/Radio';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export const MyList = () => {

    return (
        <List>
            <ListItem button key={'本地音乐'}>
                <ListItemIcon> <MusicNoteIcon /> </ListItemIcon>
                <ListItemText primary={'本地音乐'} />
            </ListItem>
            <ListItem button key={'下载管理'}>
                <ListItemIcon> <GetAppIcon /> </ListItemIcon>
                <ListItemText primary={'下载管理'} />
            </ListItem>
            <ListItem button key={'我的音乐云盘'}>
                <ListItemIcon> <FilterDramaIcon /> </ListItemIcon>
                <ListItemText primary={'我的音乐云盘'} />
            </ListItem>
            <ListItem button key={'我的电台'}>
                <ListItemIcon><RadioIcon /> </ListItemIcon>
                <ListItemText primary={'我的电台'} />
            </ListItem>
            <ListItem button key={'我的收藏'}>
                <ListItemIcon> <StarBorderIcon /> </ListItemIcon>
                <ListItemText primary={'我的收藏'} />
            </ListItem>

            {/* {['发现音乐', '私人FM', 'Look直播', '视频', '朋友'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <MusicNoteIcon /> : <PeopleOutlineIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}
        </List>
    )
}