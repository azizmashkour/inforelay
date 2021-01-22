import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/app/App';
import theme from './utils/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </I18nextProvider>,
  document.querySelector('#root'),
);
