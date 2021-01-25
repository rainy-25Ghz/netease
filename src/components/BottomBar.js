import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles((theme) => ({

    appBar: {
        backgroundColor: 'rgba(246, 246, 248, 1)',
        top: 'auto',
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
    },

}));
export function BottomBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    )
}


