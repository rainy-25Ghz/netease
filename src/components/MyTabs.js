import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: 'rgba(207, 86, 86, 1)',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#rgba(207, 86, 86, 1)',
            opacity: 1,
        },
        '&$selected': {
            color: 'rgba(207, 86, 86, 1)',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#rgba(207, 86, 86, 1)',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function MyTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="个性推荐" />
                <AntTab label="歌单" />
                <AntTab label="主播电台" />
                <AntTab label="排行榜" />
                <AntTab label="歌手" />
                <AntTab label="最新音乐" />
            </AntTabs>
            <Typography className={classes.padding} />
        </div>
    );
}
