import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';

const ContactUs =(props)=> {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className={classes.heroContent}>
      <HelpHeader />
      <Container maxWidth="md">
        <Typography
          gutterBottom
          variant="h3"
          component="h2"
          className={classes.cardContentCenter}
        >
        How to reach us?
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Just one thing to do, click on the contact us button bellow and you are done.</p>
          <h1 style={{fontSize: '1.5rem'}}>Inforelay</h1>
          <p style={{fontSize: '1.5rem'}}>Université Rennes 1 ISTIC </p>
          <p style={{fontSize: '1.5rem'}}>Tél : +33 XXXXXXXXXXX </p>
        </div>

        <div className={classes.helpCenterRoot}>

        </div>

        <Button style={{
          marginTop: 20,
          width: '20%',
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 20,
        }} size="large" variant="outlined" color="primary" href="!#">Contact us</Button>
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(ContactUs);
