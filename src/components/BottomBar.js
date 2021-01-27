import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    appBar: {
        backgroundColor: 'rgba(246, 246, 248, 1)',
        top: 'auto',
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: 'rgba(246, 246, 248, 1)',
        border: 'none',
        borderRadius: "50%",
        width: theme.spacing(4),
        height: theme.spacing(4),
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        },
        '&:focus': {
            outline: "none",
        }
    },
    button2: {
        backgroundColor: '#e2e2e2',
        border: 'none',
        borderRadius: "50%",
        width: theme.spacing(4),
        height: theme.spacing(4),
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        },
        '&:focus': {
            outline: "none",
        }
    },
    icon: {
        color: '#4f4e4e'
    },
    image: {
        right: theme.spacing(2),
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    toolbar: {
        width: '100%',
        display: "flex",
        justifyContent: 'space-between',

    },
    panel: {
        display: "flex",
        justifyContent: "center",
        alignContent: 'center',
    },
    vTrack: {
        width: theme.spacing(12),
        color: 'rgba(236, 65, 65, 1)',
    },
    track: {
        padding: theme.spacing(1),
        width: theme.spacing(60),
        color: 'rgba(236, 65, 65, 1)',
    },
    volume: {

        color: 'black',
        margin: theme.spacing(2)
    },
    align: {
        display: 'flex',
        alignItems: 'center',
    },
    panelWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    songPanel: {
        display: 'flex',
        alignItems: 'center',
    },
    audio: {
        display: 'none',
    }
}));

const url_mp3_test = './test.mp3';
export function BottomBar() {
    const classes = useStyles();
    const [state, setState] = useState({ currentTime: undefined, duration: undefined, paused: true, volume: 1 });
    const handleClick = () => {
        setState({ ...state, paused: !state.paused });
    }
    // useEffect(() => {
    //     let player = document.getElementById('player');
    //     player.volume = state.volume * 0.01;
    // }, [state]);
    const handleSliderChange = (event, newValue) => {
        let player = document.getElementById('player');
        setState({ ...state, volume: newValue * 0.01 });
        player.volume = newValue * 0.01;
    };
    useEffect(() => {
        let player = document.getElementById('player');
        if (!state.paused) player.play();
        else player.pause();
        const onEnd = (event) => {
            setState({ ...state, paused: true });
        };
        player.addEventListener('ended', onEnd);
        return (() => {
            player.removeEventListener('ended', onEnd);
        })
    }, [state])
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.songPanel}>
                        <img className={classes.image} src="http://p3.music.126.net/loJgAH7SAoSjTfpz_s0New==/109951164608517937.jpg" alt="none"></img>
                        <Typography variant="body2" style={{ padding: '8px', color: 'black' }}>
                            {'<幻想遊戯＜紅＞ex'}
                        </Typography>
                    </div>
                    <div className={classes.panelWrapper}>
                        <div className={classes.panel}>
                            <button className={classes.button1} >
                                <SkipPreviousIcon />
                            </button>
                            <button className={classes.button2} onClick={handleClick} >
                                {state.paused ? <PlayArrowIcon className={classes.icon} /> : <PauseIcon className={classes.icon} />}
                            </button>
                            <button className={classes.button1} >
                                <SkipNextIcon />
                            </button>
                        </div>
                        {/* <div className={classes.align}>
                            <Slider className={classes.track} />
                        </div> */}

                    </div>
                    <div className={classes.panel} >
                        <div className={classes.align}>
                            <VolumeUp className={classes.volume}></VolumeUp>
                        </div>
                        <div className={classes.align}>
                            <Slider className={classes.vTrack} value={typeof state.volume === 'number' ? state.volume * 100 : 0}
                                onChange={handleSliderChange}></Slider>
                        </div>
                    </div>
                    <audio id="player" controls className={classes.audio} src={url_mp3_test}></audio>
                </Toolbar>
            </AppBar>
        </div>
    )
}


