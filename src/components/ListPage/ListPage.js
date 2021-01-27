import React, { useEffect, useState } from 'react';
import { listApi } from '../../services/service';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        width: theme.spacing(27),
        height: theme.spacing(27),
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(2),
        cursor: 'pointer',
    },
    image: {
        width: theme.spacing(27),
        height: theme.spacing(27)
    },
    title: {
        width: theme.spacing(27),
        cursor: 'pointer'
    },
    header: {
        display: 'inline-flex',
        width: '1240px',
        justifyContent: 'space-between',
    },
    h5: {
        marginLeft: theme.spacing(2)
    },
    clicked: {
        color: "rgba(236, 65, 65, 1)",
        background: '#f5f5f5'
    },
    unclicked: {
        color: 'black'
    },
    pageRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    loadingIndicator: {
        color: "#ec4141"
    }
}));

const Lists = ({ tag }) => {
    const classes = useStyles();
    const [state, setState] = useState({ lists: [], isFetching: true });

    useEffect(() => {
        setState({ lists: [], isFetching: true });
        listApi(100, tag)
            .then((lists) => { setState({ lists: lists, isFetching: false }); });
    }, [tag]);

    const lists = (<div className='root'>
        {Array(20).fill(0).map((item, index) => (
            <div className={classes.row} key={-index}>
                <div className={classes.row}>
                    {state.lists.slice(index * 5, index * 5 + 5).map((item, index) => {
                        return (
                            <div className={classes.wrapper} key={index}>
                                <img className={classes.image} src={item.coverImgUrl} alt="no pic" />
                                <Typography className={classes.title} variant="body1" gutterBottom>
                                    {item.name}
                                </Typography>
                            </div>
                        )
                    })}
                </div>
            </div>)
        )}
    </div>)
    const loading = (
        <div style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
            <CircularProgress className={classes.loadingIndicator} />
        </div>
    );
    return <div>
        {state.isFetching ? loading : lists}
    </div>
}
const tags = ['华语',
    '摇滚',
    '流行',
    '民谣',
    '电子',
    '轻音乐',
    '影视原声',
    'ACG',
]
export const ListPage = () => {
    const classes = useStyles();
    const [btnState, setBtnState] = useState(Array(8).fill(false));
    const [tag, setTag] = useState(undefined);

    const handleClick = (number) => {
        const state = Array(8).fill(false);
        state[number] = true;
        setBtnState(state);
        setTag(tags[number]);
    }
    return (
        <div className={classes.pageRoot}>
            <div className={classes.header}>
                <Typography className={classes.h5} variant='h5' gutterBottom>全部歌单</Typography>
                <div>
                    <Button className={btnState[0] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(0) }}>华语</Button>
                    <Button className={btnState[1] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(1) }}>摇滚</Button>
                    <Button className={btnState[2] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(2) }}>流行</Button>
                    <Button className={btnState[3] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(3) }}>民谣 </Button>
                    <Button className={btnState[4] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(4) }}>电子 </Button>
                    <Button className={btnState[5] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(5) }}>轻音乐 </Button>
                    <Button className={btnState[6] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(6) }}>影视原声 </Button>
                    <Button className={btnState[7] ? classes.clicked : classes.unclicked} onClick={() => { handleClick(7) }}>ACG </Button>
                </div>

            </div>
            <Lists tag={tag} />
        </div>

    )
}