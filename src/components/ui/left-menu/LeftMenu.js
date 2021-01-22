import React from "react";
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../shared/styles';

const LeftMenu =(props)=> {
  const classes = useStyles();
  const { message } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <h1 style={{paddingLeft: '3rem', color: '#42A5F5'}}>Inforelay</h1>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon/></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Requests" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PermIdentityIcon/></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        </List>
    </Drawer>
  );
}

export default LeftMenu;
