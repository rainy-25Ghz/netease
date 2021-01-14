import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    leftArrow: {
        marginRight: theme.spacing(5),
        zIndex: '999',
        color: 'white'
    },
    rightArrow: {
        marginLeft: theme.spacing(5),
        zIndex: '999',
        color: 'white'
    },
    itemContainer: {
        width: theme.spacing(90),
        height: theme.spacing(33),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemMid: {
        width: theme.spacing(70),
        height: theme.spacing(30),
        position: 'relative',
        zIndex: '1000',
    },
    itemLeft: {
        width: theme.spacing(70),
        height: theme.spacing(26),
        position: 'relative',
        left: theme.spacing(35),
        zIndex: '998',
        opacity: '0.8',
        filter: 'brightness(0.5)',
    },
    itemRight: {
        width: theme.spacing(70),
        height: theme.spacing(26),
        position: 'relative',
        right: theme.spacing(35),
        zIndex: '998',
        opacity: '0.8',
        filter: 'brightness(0.5)',
    }
}))
export default function Carousel({ srcs }) {
    const classes = useStyles();
    const [ids, setIds] = useState([0, 1, 2]);
    const handleRight = () => {
        setIds(ids.map(id => id === (srcs.length - 1) ? 0 : id + 1));
    }
    const handleLeft = () => {
        setIds(ids.map(id => id === 0 ? (srcs.length - 1) : id - 1));
    }
    return (
        <div className={classes.root}>
            <IconButton onClick={handleLeft} className={classes.leftArrow}>
                <KeyboardArrowLeftIcon style={{ fontSize: 40 }} />
            </IconButton>
            <div className={classes.itemContainer}>
                <img className={classes.itemLeft} src={srcs[ids[0]]} alt='nothing' />
                <img className={classes.itemMid} src={srcs[ids[1]]} alt='nothing' />
                <img className={classes.itemRight} src={srcs[ids[2]]} alt='nothing' />
            </div>
            <IconButton onClick={handleRight} className={classes.rightArrow}>
                <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
            </IconButton>
        </div>
    )
}
