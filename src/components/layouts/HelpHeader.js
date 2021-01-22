import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigation } from '../../constants/configs';
import { Link } from "react-router-dom";
import AppLogo from '../../img/inforelay.png';
import Button from '@material-ui/core/Button';

const HelpHeader =(props)=> {
  console.log('props', props);

  return (
    <div>
    <AppBar position="fixed" color="primary">
      <Container maxWidth="md" component="header">
        <Toolbar>
          <Typography color="inherit" noWrap>
            <Link to={navigation.home} style={{textDecoration: 'none', color: '#fff'}}>
              <h2 className="primary">Inforelay</h2>
            </Link>
          </Typography>
          <Link to={navigation.dashboard} style={{textDecoration: 'none', color: '#fff', marginLeft: 'auto'}}>
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to={navigation.team} style={{textDecoration: 'none', color: '#000'}}>
            <Button color="inherit">About us</Button>
          </Link>
          <Link to={navigation.documentation} style={{textDecoration: 'none', color: '#000'}}>
            <Button color="inherit">| Ressources</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}

export default HelpHeader;
