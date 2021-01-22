import React,  {useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { environment as env } from '../../environments/env.dev';
import ErrorHandler from '../ui/error-handler/ErrorHandler';
import CardContent from '@material-ui/core/CardContent';
import { findArticle } from '../../services/HttpClient';
import Typography from '@material-ui/core/Typography';
import { navigation } from '../../constants/configs';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { Link, useParams } from "react-router-dom";
import NoResult from '../ui/no-result/NoResult';
import Button from '@material-ui/core/Button';
import { useStyles } from '../shared/styles';
import Loading from '../ui/loaders/Loading';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HelpHeader from '../layouts/HelpHeader';
import Footer from '../layouts/Footer';
import Avatar from '@material-ui/core/Avatar';
import { withTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  FiEdit,
  FiTrash2,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiStar,
  FiMessageSquare,
  FiBookmark,
  FiTwitter,
  FiFacebook,
  FiCopy,
} from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineReddit } from "react-icons/ai";
import { FaPinterestP, FaWhatsapp } from "react-icons/fa";

const ArticleDetails =(props)=> {
  let { articleId } = useParams();
  const { t } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [errorGetArticle, setErrorGetArticle] = useState(null);
  const [article, setArticle] = useState(null);
  const [copied, setCopied] = useState();
  const shareLink = 'http://fakeShareLink.com';

  useEffect(() => {
    processFindArticle();
  }, []);

  const processFindArticle = async () => {
    setLoading(true);
    const response = await findArticle(articleId);
    if (response.ok) {
      const data = await response.json();
      setArticle(data);
    } else {
      setArticle(null);
      setErrorGetArticle(t('details.retrieve_this_article'))
    }
    setLoading(false);
  }

  const handleCopyUrl = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }

  return (
    <main>
      <HelpHeader />
      <Container className={classes.cardGrid} maxWidth="md">
        <Box mb={2}>
          <Link to={navigation.home} className={classes.link}>
            <Button
              variant="contained"
              color="default"
              size="large"
              startIcon={<KeyboardBackspaceIcon />}
              className={classes.backBtn}
            >
              {t('details.back')}
            </Button>
          </Link>
        </Box>
        { loading && <Loading message={t('details.loading')} /> }
        { !loading && <>
          { errorGetArticle && <ErrorHandler message={errorGetArticles} /> }
          { !errorGetArticle &&
            <Grid container spacing={4}>
              { article &&
                <>
                  <Grid item xs={12} sm={6} md={6}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={article.image ? article.image.original : env.MOVIE_PLACEHOLDER_URL }
                      title={article.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {article.name}
                            <Avatar variant="rounded" className={classes.rounded}>
                              {t('details.good_news')}
                            </Avatar>
                          </Typography>
                          <div
                            dangerouslySetInnerHTML={{__html: article.summary }}
                            className={classes.cardContentDescription}
                          />
                        </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <h3>{t('details.share')}</h3>
                    <div className={classes.socialShare}>
                      <a href={`https://web.whatsapp.com/share?url=${shareLink}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp fill="rgb(102, 199, 84)"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <a href={`http://twitter.com/share?text=I would like to share this trade with you&url=${shareLink}&hashtags=helpntrade`} target="_blank" rel="noopener noreferrer">
                        <FiTwitter stroke="#38A1F3"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <a href={`https://www.facebook.com/sharer.php?u=${shareLink}`} target="_blank" rel="noopener noreferrer">
                        <FiFacebook stroke="#4267B2"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <a href={`http://pinterest.com/pin/create/button/?url=${shareLink}`} count-layout="horizontal" target="_blank" rel="noopener noreferrer">
                        <FaPinterestP fill="#E60023"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`} target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin fill="#0072b1"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <a href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank" rel="noopener noreferrer">
                        <AiOutlineReddit fill="#FF5700"/>
                      </a>
                    </div>
                    <div className={classes.socialShare}>
                      <CopyToClipboard
                          text={shareLink}
                          onCopy={handleCopyUrl}
                      >
                        <FiCopy />
                      </CopyToClipboard>
                    </div>
                    {copied && <span>{t('details.copied')}</span>}
                  </Grid>
                </>
              }
              {!article && <NoResult message={t('details.article_not_found')} />}
            </Grid>
          }
          </>
        }
      </Container>
      <Footer />
    </main>
  );
};

export default withTranslation()(ArticleDetails);
