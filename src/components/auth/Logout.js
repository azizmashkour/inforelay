import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuthDispatch, logout, useAuthState } from '../../context';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  textRight: {
    cursor: 'pointer',
    display: 'flex',
    float: 'right',
    '& span': {
      fontSize: 'large',
      marginRight: '.5rem',
    }
  },
}));

const Logout =(props)=> {
  const classes = useStyles();
  const { t } = props;
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push('/login');
  };


  return (
    <div className={`${classes.toolbar} ${classes.textRight}`}>
      <span onClick={handleLogout}>{t('dashboard.logout')}</span>
      <ExitToAppIcon />
    </div>
  );
}

export default withTranslation()(Logout);
