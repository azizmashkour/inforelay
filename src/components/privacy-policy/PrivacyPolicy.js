import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';

const PrivacyPolicy =(props)=> {
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
        Mentions légales de Inforelay
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Mis à jour le 20 Janvier à 21 h 36</p>

          <h2 style={{fontSize: '1.5rem'}}>Propriété intellectuelle </h2>
          <p style={{fontSize: '1.5rem'}}>En vous connectant à ce site édité et mis en ligne par Inforelay, vous accédez à un contenu protégé par la loi, notamment par les dispositions du Code de la propriété intellectuelle. L'éditeur n'autorise qu'un usage strictement personnel des données, informations ou contenus auxquels vous accédez, limité à un enregistrement temporaire sur appareil aux fins d'affichage sur un seul écran ainsi que la reproduction, en un unique exemplaire, pour copie de sauvegarde ou impression sur papier. Toute autre utilisation est soumise à notre autorisation expresse préalable. En poursuivant votre visite de notre site vous acceptez de respecter les restrictions ci-dessus. Droits de reproduction et de diffusion réservés à Inforelay. </p>

          <p style={{fontSize: '1.5rem'}}>Les utilisateurs et d’une manière générale, tout tiers personne physique ou morale, ne sont pas autorisés à utiliser les contenus sur nos sites internet et/ou nos supports numériques à d’autres fins que dans le cadre d’un usage personnel, privé et non commercial. </p>
          <p style={{fontSize: '1.5rem'}}>L’usage des fils RSS n’est autorisé qu’à des fins privées (logiciels agrégateurs RSS, Netvibes, Feedly, ...). Inforelay en interdit l’usage et la reproduction sur d’autres sites internet, affichage dynamique, ou tout autre média interne ou externe sans autorisation et se réserve le droit de poursuivre les contrevenants. </p>
        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(PrivacyPolicy);
