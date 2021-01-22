import React from "react";
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
import FlagIcon from '@material-ui/icons/Flag';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Language from '../language/Language';
import Logout from '../auth/Logout';
import { withTranslation } from 'react-i18next';
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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  toolItem: {
    marginTop: '4rem',
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

const rand =()=> {
  return Math.round(Math.random() * 20) - 10;
}
const getModalStyle =()=> {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Profile =(props)=> {
  const classes = useStyles();
  const { t } = props;

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
          <ListItem button className={classes.menuItems} component={Link} to="/request">
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Requests" className={classes.items}/>
          </ListItem>
          <ListItem button className={`${classes.menuItems} ${location.pathname == '/profile' && classes.activePath}`} component={Link} to="/profile">
            <ListItemIcon className={`${location.pathname == '/profile' && classes.activePath}`}><AssignmentIndIcon /></ListItemIcon>
            <ListItemText primary="Profile" className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/notifications">
            <ListItemIcon><NotificationsIcon /></ListItemIcon>
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
          className={classes.toolItem}
        >
          {t('profile.need_anything')}
          <List>
            <ListItem button className={classes.menuItems} component={Link} to="/documentation">
              <ListItemIcon><FlagIcon/></ListItemIcon>
              <ListItemText primary={t('profile.documentation')} className={classes.items}/>
            </ListItem>
            <ListItem button className={classes.menuItems} component={Link} to="/help-center">
              <ListItemIcon><LiveHelpIcon /></ListItemIcon>
              <ListItemText primary={t('profile.help_center')} className={classes.items}/>
            </ListItem>
          </List>
        </Typography>
      </main>
    </div>
  );
}

export default withTranslation()(Profile);
