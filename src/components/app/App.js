import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import HelpCenter from '../help-center/HelpCenter';
import routes from "../../constants/routes.js";
import { AuthProvider } from "../../context";
import AppRoutes from "../AppRoutes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              exact={route.exact}
              key={route.path}
              component={route.component}
              path={route.path}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
