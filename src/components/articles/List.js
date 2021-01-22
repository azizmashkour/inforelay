import React,  {useState, useEffect } from 'react';
import { environment as env } from '../../environments/env.dev';
import ErrorHandler from '../ui/error-handler/ErrorHandler';
import { searchArticles } from '../../services/HttpClient';
import CardContent from '@material-ui/core/CardContent';
import { Link, useRouteMatch } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import NoResult from '../ui/no-result/NoResult';
import { useStyles } from '../shared/styles';
import Loading from '../ui/loaders/Loading';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import HelpHeader from '../layouts/HelpHeader';
import Footer from '../layouts/Footer';
import Avatar from '@material-ui/core/Avatar';
import SearchDatas from '../../datas/SearchDatas';
import { useForm, Controller } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
const tawkTo = require("tawkto-react");
const tawkToPropertyId = '600b0c9fc31c9117cb7180d5';

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const List =(props)=> {
  let matchRoute = useRouteMatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [errorGetArticles, setErrorGetArticles] = useState(null);
  const [articles, setArticles] = useState([]);
  const { t } = props;

  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = React.useCallback(data => {
    console.log("Submitted:", data);
  }, []);

  useEffect(() => {
    // tawkTo(tawkToPropertyId);
    processSearchArticles();
  }, []);

  const onInputSearchArticle = (e) => {
    setSearch(e.target.value);
    processSearchArticles(e.target.value);
  }

  const processSearchArticles = async (query) => {
    setLoading(true);
    const response = await searchArticles(query);
    if (response.ok) {
      const data = await response.json();
      setArticles(data)
    } else {
      setArticles([])
      setErrorGetArticles(t('home.retrieve_the_articles'))
    }
    setLoading(false);
  }

  const defaultValues = {
    badge: false,
    title: false,
    author: false,
    description: false,
  };

  return (
    <main>
      <HelpHeader />
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.typo}>
           {t('home.relay_of_information')}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {t('home.covid_19')}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={t('home.tap_a_word')}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onInputSearchArticle}
              value={search}
            />
          </div>
          <div className={classes.searchForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth component="fieldset" margin="normal">
                <FormGroup aria-label="Temas" row={true} className={classes.SearchFormGroup}>
                  {SearchDatas.map((theme, i) => (
                    <>
                      <label className={classes.labelize}>{theme}</label>
                      <Controller
                        as={<Checkbox />}
                        name={theme}
                        type="checkbox"
                        control={control}
                        classes={classes.MuiCheckbox}
                      />
                    </>
                  ))}
                </FormGroup>
              </FormControl>
              {/*<input type="submit" value="Search"/>*/}
            </form>
            <div className={classes.addInfo}>
              <Link to='/rich-editor' className={classes.editorBtn}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {t('home.publish')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGridHome} maxWidth="md">
        { loading && <Loading message={t('home.loading')} /> }
        { !loading && <>
          { errorGetArticles && <ErrorHandler message={errorGetArticles} /> }
          { !errorGetArticles &&
            <Grid container spacing={4}>
              {articles.map((article) => (
                <Grid item key={article.show.id} xs={12} sm={6} md={6}>
                  <Link to={`${matchRoute.path}article/${article.show.id}`} className={classes.link}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={article.show.image ? article.show.image.original : env.MOVIE_PLACEHOLDER_URL }
                        title={article.show.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {article.show.name}
                          <Avatar variant="rounded" className={classes.rounded}>
                            {t('home.fake_news')}
                          </Avatar>
                        </Typography>
                        <div dangerouslySetInnerHTML={{__html: article.show.summary }} className={classes.cardContentDescription} />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
              { !articles.length && <NoResult message={t('home.no_articles_match')} /> }
            </Grid>
          }
          </>
        }
      </Container>
      <Footer />
    </main>
  );
};

export default withTranslation()(List);
