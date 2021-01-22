import React, { useState } from "react";
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
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ChartDatas from './canvas/ChartDatas';
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
  h1Style: {
    paddingLeft: '3rem',
    color: '#42A5F5',
    fontSize: '2.5rem',
    '& a': {
      color: '#42A5F5',
      textDecoration: 'none',
    },
  },
  langBox: {
    marginTop: 'auto',
    paddingBottom: '7rem',
    paddingLeft: '3rem',
  },
  selectBox: {
    width: '100px',
  }
}));

const Dashboard =(props)=> {
  const classes = useStyles();
  const { message, t } = props;

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
          <ListItem button className={`${classes.menuItems} ${location.pathname == '/dashboard' && classes.activePath}`} component={Link} to="/dashboard">
            <ListItemIcon className={`${location.pathname == '/dashboard' && classes.activePath}`}><DashboardIcon /></ListItemIcon>
            <ListItemText primary={`${t('dashboard.menu.analytics')}`} className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/request">
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary={`${t('dashboard.menu.requests')}`} className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/profile">
            <ListItemIcon><AssignmentIndIcon/></ListItemIcon>
            <ListItemText primary={`${t('dashboard.menu.profile')}`} className={classes.items}/>
          </ListItem>
          <ListItem button className={classes.menuItems} component={Link} to="/notifications">
            <ListItemIcon><NotificationsIcon/></ListItemIcon>
            <ListItemText primary={`${t('dashboard.menu.notifications')}`} className={classes.items}/>
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
          {t('dashboard.sadly_message')}
          <p style={{fontSize: '1.5rem'}}>{t('dashboard.add_content')}</p>
          <Button style={{
            marginTop: 50,
            width: '50%',
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 20,
          }} size="large" variant="outlined" color="primary" href="/dashboard">{t('dashboard.new_article')}</Button>
        </Typography>
        <Typography component="h1" variant="h4" color="textPrimary" gutterBottom className={classes.typo}>
         {t('dashboard.dashboard')}
        </Typography>
        <div className={classes.chartClx}>
          <ChartDatas />
        </div>
      </main>
    </div>
  );
}

export default withTranslation()(Dashboard);
