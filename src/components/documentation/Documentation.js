import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import HelpHeader from '../layouts/HelpHeader';
import { withTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';
import CreateArticle from '../../img/create-article.png';
import RichEditor from '../../img/rich-editor.png';
import TargetArticle from '../../img/target-article.png';
import SearchArticle from '../../img/search-article.png';

const Documentation =(props)=> {
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
          How to use Inforelay?
        </Typography>
        <div>
          <p style={{fontSize: '1.5rem'}}>Welcome to the Documentation, where you can find info to help you get started and familiarise yourself with Inforelay Global information, or get help with an issue.</p>
        </div>

        <div className={classes.helpCenterRoot}>
          <h2 style={{fontSize: '1.5rem'}}>Creating an article</h2>
          <p style={{fontSize: '1.5rem'}}>How to create an article</p>
          <ol>
            <li style={{fontSize: '1.2rem'}}>Navigate to `http://localhost:3000`</li>
            <li style={{fontSize: '1.2rem'}}>Click on the "PUBLISH A NEW INFORMATION" button</li> <br/>
            <img src={CreateArticle} width="100%"/>

            <li style={{fontSize: '1.2rem'}}>Our rich text editor</li> <br/>
            <ul>
              <li style={{fontSize: '1.1rem'}}>You can customize your content with the <b>WYSIWYG</b> editor. </li>
              <li style={{fontSize: '1.1rem'}}>Click the editor icons to format your text. </li>
              <li style={{fontSize: '1.1rem'}}>You have the possibility to attach media (links, images) to your step. </li> <br/>
            </ul>
            <img src={RichEditor} width="100%"/>
          </ol>

          <h2 style={{fontSize: '1.5rem'}}>Sharing an article</h2>
          <p style={{fontSize: '1.5rem'}}>How to share an article</p>
          <ol>
            <li style={{fontSize: '1.2rem'}}>Navigate to `http://localhost:3000`</li>
            <li style={{fontSize: '1.2rem'}}>Click on the article you want to share to move to the details page</li> <br/>
            <img src={TargetArticle} width="100%"/>

            <li style={{fontSize: '1.2rem'}}>At the bottom side of the article image, click on any link to share it.</li> <br/>
            <li style={{fontSize: '1.1rem'}}>Also you can just copy the "PUBLIC URL", on the copy icon.</li>
          </ol>

          <h2 style={{fontSize: '1.5rem', marginTop: '7rem'}}>Searching an article</h2>
          <p style={{fontSize: '1.5rem'}}>How to search an article</p>
          <ol>
            <li style={{fontSize: '1.2rem'}}>Navigate to `http://localhost:3000`</li>
            <li style={{fontSize: '1.2rem'}}>Type any keywords into the search box</li> <br/>
            <img src={SearchArticle} width="100%"/>
            <li style={{fontSize: '1.2rem'}}>You can also filter the articles by: "title", "description", "badge", and "author" properties</li> <br/>
          </ol>

        </div>


        <div>
          <p style={{fontSize: '1.5rem'}}>Inforelay Support team is happy to help you via online chat or email.</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default withTranslation()(Documentation);
