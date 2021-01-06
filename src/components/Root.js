import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeadBar from './HeadBar';
import SideDrawer from './SideDrawer';
import MainPage from './MainPage';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));
export default function Root() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeadBar />
            <SideDrawer />
            {/* <MainPage /> */}
        </div>
    )
}

