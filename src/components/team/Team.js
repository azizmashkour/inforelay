import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';
import TeamMembers from '../../constants/TeamMembers';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

const Team =(props)=> {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className={classes.heroContent}>
      <HelpHeader />
      <Container maxWidth="md">
        <Typography
          gutterBottom
          variant="h2"
          component="h2"
          className={classes.cardContentCenter}
        >
        Notre équipe
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Hamid, Mashkour et Oriane, trois passionnés d’informatique qui aiment les nouvelles technologies web !</p>
          <p style={{fontSize: '1.5rem'}}>Dans le contexte actuel d’épidémie où il est très difficile de maitriser et contrôler le flux d’information circulant sur les plateformes, nous avons développé le Inforelay pour traiter et séparer les informations fausses des vraies, avant de les partager au public. <br/> <br/>Vu l’ampleur que prend les fakenews aujourd’hui, l’anxiété, l’état de dépression, l’instabilité et le manque de confiance en l’autorité, grandissant de plus en plus, nous avons décidé de créer ce site web.</p>
          <p style={{fontSize: '1.5rem'}}>En résumé, nous nous sommes rendus compte qu’il existait peu d’environnement de confiance, à caractère social et impartial où celui qui souhaite faire passer une information importante liée au COVID pourrait le faire et parallèlement celui qui souhaite s‘informer le ferait sans craindre d’être mal informé. </p>
          <p style={{fontSize: '1.5rem'}}>Et voilà que cette idée est née : proposer une simple inscription et dépôt de votre actualité en ligne tandis que, de notre côté, nous nous occupons de la vérification de sa fiabilité puis de sa publication.</p>
          <p style={{fontSize: '1.5rem'}}>Ce projet est développé dans le cadre d’un projet scolaire à l’Université Rennes 1 ISTIC.</p>
        </div>

        <Grid container spacing={4}>
          {TeamMembers.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4}>
              <Link to='#' className={classes.link}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={member.image_url}
                    title={member.full_name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {member.full_name}
                    </Typography>
                    <h3>{member.role}</h3>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(Team);
