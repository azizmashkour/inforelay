import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import { options } from '../../config/options';
import BrowserLanguage from "../../services/BrowserLanguage";
import { withTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  langBox: {
    marginTop: 'auto',
    paddingBottom: '7rem',
    paddingLeft: '3rem',
  },
  selectBox: {
    width: '100px',
  }
}));

const Language =(props)=> {
  const classes = useStyles();
  const { t } = props;

  const [lang, setLang] = useState(options[1]);

  const changeLang = (lang) => {
    const { i18n } = props;
    const { value } = lang;
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      lang = tempLang === "en" ? "fr" : "en";
    }
    console.log('valuevalue', lang, value);
    setLang(lang);
    i18n.changeLanguage(value);
    if (BrowserLanguage.setLanguage(value)) {
      // Reload page if browser support localStorage
      window.location.reload(); // Relaod app after langue change
    } else {
      // Change language at runtime if localStorage not found
      i18n.changeLanguage(value); // Need for change language at runtime
    }
  };

  return (
    <div className={classes.langBox}>
      <h2>{t("home.chooseLang")}</h2>
      <Select
        options={options}
        value={lang}
        onChange={changeLang}
        className={classes.selectBox}
      />
    </div>
  );
}

export default withTranslation()(Language);
