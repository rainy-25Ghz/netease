import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import LiveTvIcon from '@material-ui/icons/LiveTv';
export const RecommendedBar = () => {
    return (
        <List>
            <ListItem button key={'发现音乐'}>
                <ListItemIcon> <MusicNoteIcon /> </ListItemIcon>
                <ListItemText primary={'发现音乐'} />
            </ListItem>
            <ListItem button key={'私人FM'}>
                <ListItemIcon> <WifiTetheringIcon /> </ListItemIcon>
                <ListItemText primary={'私人FM'} />
            </ListItem>
            <ListItem button key={'Look直播'}>
                <ListItemIcon> <LiveTvIcon /> </ListItemIcon>
                <ListItemText primary={'Look直播'} />
            </ListItem>
            <ListItem button key={'视频'}>
                <ListItemIcon><VideocamOutlinedIcon /> </ListItemIcon>
                <ListItemText primary={'视频'} />
            </ListItem>
            <ListItem button key={'朋友'}>
                <ListItemIcon> <PeopleOutlineIcon /> </ListItemIcon>
                <ListItemText primary={'朋友'} />
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