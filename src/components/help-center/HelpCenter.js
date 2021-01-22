import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import Footer from '../layouts/Footer';
import { withTranslation } from 'react-i18next';

const HelpCenter =(props)=> {
  const classes = useStyles();
  const { message, t } = props;

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
        {t('helpCenter.help')}
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>{t('helpCenter.help_center')}</p>
        </div>

        <div className={classes.helpCenterRoot}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{t('helpCenter.inforelay_fees')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t('helpCenter.inforelay_info')}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>{t('helpCenter.inforelay_easy')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t('helpCenter.charges_fees')}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>{t('helpCenter.inforelay_fast')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t('helpCenter.world_news')}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <Typography
          gutterBottom
          variant="h3"
          component="h2"
          className={classes.cardContentCenter}
        >
          {t('helpCenter.team_contact')}
        </Typography>

        <div>
          <p style={{fontSize: '1.5rem'}}>{t('helpCenter.happy_team')}</p>
        </div>

        <Button style={{
          marginTop: 20,
          width: '20%',
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 20,
        }} size="large" variant="outlined" color="primary" href="!#">{t('helpCenter.contact_us')}</Button>
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(HelpCenter);
