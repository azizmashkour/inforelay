import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';

const TermsOfUse =(props)=> {
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
        Conditions générales d’utilisation de Inforelay
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Mis à jour le 20 Janvier à 21 h 36</p>

          <h2 style={{fontSize: '1.5rem'}}>Conditions générales d’abonnement aux services</h2>
          <p style={{fontSize: '1.5rem'}}>Les présentes conditions générales d’abonnement en ligne vous sont proposées par Inforelay.</p>

          <h2 style={{fontSize: '1.5rem'}}>I. Définitions et champs d’application </h2>
          <p style={{fontSize: '1.5rem'}}>Inforelay group édite le support digital suivant :</p>
          <ul>
            <li>Le site internet Inforelay</li>
            <p style={{fontSize: '1.5rem'}}>Les présentes conditions générales régissent nos relations avec les abonnés et/ou utilisateurs, l’abonnement, l’accès aux services, l’utilisation des services d’information en ligne, ainsi que l’ensemble des prestations de services , que nous vous proposons via ce site). </p>
            <p style={{fontSize: '1.5rem'}}>Lesdites conditions sont complétées par le document « Conditions d’utilisation de notre site Internet» en annexe, formant ainsi notre « cadre contractuel »: </p>
            <p style={{fontSize: '1.5rem'}}>Les contrats sont présentés à chaque abonné préalablement à la souscription du premier abonnement. </p>
            <p style={{fontSize: '1.5rem'}}>Ledit « cadre contractuel » s’impose à tout abonné et utilisateur et les lie mutuellement à Inforelay, sans condition ni réserve, permettant ainsi l’usage uniforme de nos services. </p>
            <p style={{fontSize: '1.5rem'}}>L’éventuelle tolérance d’un manquement contractuel ne vaut pas renonciation d’Inforelay Group à s’en prévaloir. En cas de nullité de l’une des clauses du contrat, les autres stipulations garderont toute leur force et portée. </p>
          </ul>

          <h2 style={{fontSize: '1.5rem'}}>II. Modalités d’accès et d’abonnements </h2>
          <p style={{fontSize: '1.5rem'}}>L’accès intégral au site internet de Inforelay. est gratuit et n’implique pas la création d’un compte.</p>

          <h2 style={{fontSize: '1.5rem'}}>III. Conditions tarifaires et paiements </h2>
          <p style={{fontSize: '1.5rem'}}>Nos services ont un caractère social et s’effectuent  gratuitement. </p>

          <h2 style={{fontSize: '1.5rem'}}>Limitations propres à l’utilisation du site Internet </h2>
          <p style={{fontSize: '1.5rem'}}>Ce projet est développé dans le cadre d’un projet scolaire à l’Université Rennes 1 ISTIC.</p>

          <p style={{fontSize: '1.5rem'}}>Inforelay s’engage à fournir ses meilleurs efforts pour sécuriser l’accès, la consultation et l’utilisation des informations conformément aux règles d’usages de l’Internet. Les sites sont accessibles 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou de survenance d’un événement hors contrôle de Inforelay et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du site. Les interventions de maintenance pourront être effectuées sans information préalable auprès des abonnés. </p>

          <p style={{fontSize: '1.5rem'}}>
            L’abonné utilise les services du Inforelay en l’état. L’abonné déclare aussi accepter les caractéristiques et les limites de l’Internet, et en particulier reconnaître que :
          </p>
          <ul>
            <li>son utilisation du site se fait à ses risques et périls ; </li>
            <li>le site est accessible« en l’état » et en fonction de sa disponibilité ;  </li>
            <li>tout téléchargement par l’abonné est fait sous sa responsabilité ; </li>
            <li>l’abonné est seul responsable pour tout dommage subi par son ordinateur, téléphone, tablette ou toute perte de données consécutif au téléchargement de ce matériel ou à la consultation du site; </li>
            <li>il appartient à l’abonné de prendre toutes les mesures appropriées de façon à protéger ses propres données et/ou logiciels de la contamination par d’éventuels virus circulant à travers les sites et/ou les informations et contenus ; </li>
            <li>aucun conseil et aucune information, qu’ils soient oraux ou écrits, obtenus par l’abonné de ou lors de l’utilisation des sites ne sont susceptibles de créer des garanties non expressément prévues par les présentes conditions générales ; </li>
            <li>il est seul responsable de l’utilisation faite des informations présentes sur le site et, en conséquence, Inforelay ne saurait être tenu responsable de dommages directs ou indirects découlant de l’utilisation de ces informations ; </li>
            <li>il lui appartient de prendre toutes mesures nécessaires pour s’assurer que les caractéristiques techniques de son équipement lui permettent la consultation des informations. </li>
          </ul>
          <p style={{fontSize: '1.5rem'}}>
          Les services proposés par Inforelay sont conformes à la législation française en vigueur. Toutes les informations et données diffusées dans les publications de Inforelay sont fournies à titre d’information. Inforelay ne saurait être tenu pour responsable d’un quelconque dommage, direct ou indirect, pouvant résulter d’erreurs, d’omissions ou de retards dans la transmission ou la publication desdites informations.
          </p>

          <h2 style={{fontSize: '1.5rem'}}>VII. Dispositions diverses </h2>
          <p style={{fontSize: '1.5rem'}}>A la souscription de l’abonnement, la personne déclare ne pas utiliser ce site à des fins commerciales sous peine de sanction. </p>

          <h2 style={{fontSize: '1.5rem'}}>Propriété Intellectuelle </h2>
          <p style={{fontSize: '1.5rem'}}>L’ensemble des contenus de nos sites Internet et applications accessibles librement ou sur abonnement, et notamment, de façon non limitative : la Charte graphique, le titre, la forme, le plan du site, les textes, les logos, les marques, les images et base de données accessibles ou mises à disposition, tant en libre accès que sur abonnement, ainsi que tous les programmes et/ou technologies fournis en relation avec le site et, plus généralement, tout ou partie du site lui-même sont protégés par les dispositions du Code de la propriété intellectuelle. Il en va de même pour les archives. </p>

          <h2 style={{fontSize: '1.5rem'}}>Conditions d’Utilisation des sites Internet et applications de Jeune Afrique Media Group </h2>
          <p style={{fontSize: '1.5rem'}}>En accédant aux sites Internet et applications de Jeune Afrique Media Group pour consulter ou utiliser nos services, vous reconnaissez vous conformer aux lois en vigueur notamment en France, et aux conditions d’utilisation suivantes : </p>

          <h2 style={{fontSize: '1.5rem'}}>Article 1. Droits de propriété intellectuelle</h2>
          <p style={{fontSize: '1.5rem'}}>L’ensemble des contenus de nos sites Internet et Applications et notamment, de façon non limitative, la charte graphique, le titre, la forme, le plan des sites et applications, les textes, les logos, les marques, les images et base de données accessibles ou mises à disposition, tant en libre accès que sur abonnement, ainsi que tous les programmes et/ou technologies fournis en relation avec les sites et applications et, plus généralement, tout ou partie des sites et applications eux-mêmes sont protégés par les dispositions du Code de la propriété intellectuelle. </p>
          <p style={{fontSize: '1.5rem'}}>Particulièrement, les marques et les noms de domaine constituent des dénominations protégées appartenant à notre Société dont vous ne pouvez en aucun cas faire usage sans notre accord exprès écrit et préalable. </p>
          <p style={{fontSize: '1.5rem'}}>Les présentes conditions générales n’entraînent aucun transfert de droit de propriété intellectuelle au profit des utilisateurs de nos sites Internet ou Applications, à quelque titre que ce soit.</p>
          <p style={{fontSize: '1.5rem'}}>Tout utilisateur des sites Internet ou applications, abonné ou non, s’oblige à employer les contenus mis à disposition qu’à des fins licites, conformément à la législation en vigueur et dans le respect des conditions générales et des présentes conditions d’utilisation. </p>
          <p style={{fontSize: '1.5rem'}}>La violation de ces dispositions impératives soumet le contrevenant, et toute personne responsable, aux peines pénales et civiles prévues par les textes en vigueur, notamment en France. </p>

          <h2 style={{fontSize: '1.5rem'}}>Article 2. Limitation de responsabilité </h2>
          <p style={{fontSize: '1.5rem'}}>Vous reconnaissez et acceptez qu’en tant qu’utilisateur, vous utilisez nos sites Internet et applications en l’état, à vos risques et périls. Tous les contenus que nous éditons sont fournis à titre strictement informatif. </p>
          <p style={{fontSize: '1.5rem'}}>Nous ne pourrons, en tout état de cause, être tenu pour responsable d’un quelconque dommage, direct ou indirect, pouvant résulter d’erreurs, d’omissions et/ou de retards dans la transmission et la publication des informations mises à disposition sur nos sites Internet et applications, librement ou sur abonnement. </p>

          <h2 style={{fontSize: '1.5rem'}}>Article 3. – Exercice du droit de réponse </h2>
          <p style={{fontSize: '1.5rem'}}>Conformément aux textes en vigueur, vous disposez d’un droit de réponse, que vous pouvez exercer en formulant votre demande par lettre recommandée avec demande d’avis de réception ou par tout autre moyen garantissant l’identité du demandeur et apportant la preuve de la réception de la demande. </p>

          <h2 style={{fontSize: '1.5rem'}}>Article 4. Modifications des Conditions d’utilisation du site </h2>
          <p style={{fontSize: '1.5rem'}}>Les présentes conditions générales d’utilisation des sites et applications applicables sont celles en vigueur lors de la connexion à nos sites Internet et applications et de son utilisation, dont vous déclarez avoir pris connaissance sur nos sites Internet ou applications et que vous vous engagez à respecter sans restriction ni réserve.</p>
          <p style={{fontSize: '1.5rem'}}>Les conditions d’utilisation du site sont sujettes à modifications ou évolutions notamment afin de prendre en compte toute évolution jurisprudentielle, légale ou technique. Les modifications prendront effet le jour de leur publication sur nos sites Internet et applications. </p>

        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(TermsOfUse);
