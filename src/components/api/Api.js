import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';

const Api =(props)=> {
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
        Our Api documentation
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Welcome to the Api ressource, where you can find help to embed or import your articles from Inforelay.</p>
        </div>

        <div className={classes.helpCenterRoot}>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.cardContentCenter}
          >
            Using JavaScript API to display articles
          </Typography>
        </div>

        <h2><pre>inforelay.articles.get()</pre></h2>
        <p style={{fontSize: '1.5rem'}}>Returns the list of articles. You can set filters as first parameter to call the method. Currently inforelay only supports the URL filter. Other filters will be added in the future.</p>

        <h2><pre>
          inforelay.articles.get({
            `https://example.com`
          })
        </pre></h2>
        <br/>
        <br/>
        <h2><pre>inforelay.articles.get_by_id()</pre></h2>
        <p style={{fontSize: '1.5rem'}}>Returns the properties of the article specified(when you specify the article_id ID).</p>

        <h2><pre>inforelay.articles.get_by_id(article_id)</pre></h2>
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(Api);
