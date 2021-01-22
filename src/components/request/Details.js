import React, { useState, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { findArticle } from '../../services/HttpClient';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { environment as env } from '../../environments/env.dev';
import { navigation } from '../../constants/configs';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import NoResult from '../ui/no-result/NoResult';
import Loading from '../ui/loaders/Loading';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HelpHeader from '../layouts/HelpHeader';
import Avatar from '@material-ui/core/Avatar';
import Language from '../language/Language';
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
  h1: {
    marginTop: '2',
  }
}));

const Notifications =(props)=> {
  let { requestId } = useParams();
  const classes = useStyles();
  const { message } = props;
  const [loading, setLoading] = useState(true);
  const [errorGetArticle, setErrorGetArticle] = useState(null);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    processFindArticle();
  }, []);

  const processFindArticle = async () => {
    console.log(';;;;;opopopo', requestId);
    setLoading(true);
    const response = await findArticle(requestId);
    if (response.ok) {
      const data = await response.json();
      setArticle(data)
      console.log('one article', data)
    } else {
      // error fetching
      setArticle(null)
      setErrorGetArticle('Désolé, nous ne parvenons pas à récupérer le film. Veuillez réessayer plus tard svp.')
    }
    setLoading(false);
  }

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
        <h1 style={classes.h1Style}>Inforelay</h1>
        <div className={classes.toolbar} />
        <List>
          <ListItem button className={classes.menuItems} component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText primary="Analytics" className={classes.items}/>
          </ListItem>
          <ListItem button className={`${classes.menuItems} ${location.pathname == `/request/${requestId}` && classes.activePath}`} component={Link} to="/request">
            <ListItemIcon className={`${location.pathname == `/request/${requestId}` && classes.activePath}`}><AssignmentIcon /></ListItemIcon>
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
        <div className={`${classes.toolbar} ${classes.textRight}`}>
          <span>Logout</span>
          <ExitToAppIcon />
        </div>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.cardContentCenter}>
          Fake request title
        </Typography>

        {/*
          list of requests with attr: title, short desc, source, badge and link to view details
        */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Box mb={2}>
            <Link to={navigation.home} className={classes.link}>
              <Button
                variant="contained"
                color="default"
                size="large"
                startIcon={<KeyboardBackspaceIcon />}
                className={classes.backBtn}
              >
                Back
              </Button>
            </Link>
          </Box>
          { loading && <Loading message="Loading..." /> }
          { !loading && <>
            { errorGetArticle && <ErrorHandler message={errorGetArticles} /> }
            { !errorGetArticle &&
              <>
                { article &&
                  <>
                    <Typography gutterBottom variant="h4" component="h2">
                      {article.name}
                    </Typography>
                    {/*
                      name={article.name}
                      image={article.image ? article.image.original : env.MOVIE_PLACEHOLDER_URL}
                      title={article.name}

                    */}
                  </>
                }
                {!article && <NoResult message="L'article n'a pas été retrouvé." />}
              </>
            }
            </>
          }
        </Container>
      </main>
    </div>
  );
}

export default withTranslation()(Notifications);
