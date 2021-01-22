import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Language from '../language/Language';
import { withTranslation } from 'react-i18next';
import Logout from '../auth/Logout';
import RequestList from './List';

const drawerWidth = 385;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  menuItems: {
    padding: '20px 48px',
  },
  activePath: {
    color: '#42A5F5',
  },
  items: {
    '& span': {fontSize: '1.25rem',}
  },
  cardContentCenter: {
    width: '100%',
    textAlign: 'center'
  },
  textRight: {
    cursor: 'pointer',
    display: 'flex',
    float: 'right',
    '& span': {
      fontSize: 'large',
      marginRight: '.5rem',
    }
  },
  h1Style: {
    fontSize: '2.5rem',
    paddingLeft: '3rem',
    color: '#42A5F5',
    '& a': {
      color: '#42A5F5',
      textDecoration: 'none',
    },
  },
}));

const Request =(props)=> {
  const classes = useStyles();
  const { message } = props;
  // const location = useLocation();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h1 className={classes.h1Style}><a href="/">Inforelay</a></h1>
        <div className={classes.toolbar} />
        <List>
          <ListItem button className={classes.menuItems} component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText primary="Analytics" className={classes.items}/>
          </ListItem>
          <ListItem button className={`${classes.menuItems} ${location.pathname == '/request' && classes.activePath}`} component={Link} to="/request">
            <ListItemIcon className={`${location.pathname == '/request' && classes.activePath}`}><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Requests" className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/profile">
            <ListItemIcon><AssignmentIndIcon/></ListItemIcon>
            <ListItemText primary="Profile" className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/notifications">
            <ListItemIcon><NotificationsIcon/></ListItemIcon>
            <ListItemText primary="Notifications" className={classes.items}/>
          </ListItem>
        </List>
        <Language />
      </Drawer>
      <main className={classes.content}>
        <Logout />
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.cardContentCenter}>
          <p style={{fontSize: '5rem'}}> 🥺 </p>
          Sadly! there is no request created or submitted yet.
          <p style={{fontSize: '1.5rem'}}> Please add requests...</p>
          <Button style={{
            marginTop: 50,
            width: '50%',
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 20,
          }} size="large" variant="outlined" color="primary" href="/dashboard">Mew request</Button>
        </Typography>

        {/*
          list of requests with attr: title, short desc, source, badge and link to view details
        */}
        <RequestList />
      </main>
    </div>
  );
}

export default withTranslation()(Request);
