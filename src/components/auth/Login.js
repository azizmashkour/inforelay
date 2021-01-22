import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../shared/styles';
import CloseIcon from '@material-ui/icons/Close';
import Footer from '../layouts/Footer';
import { Link } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from '../../context';

const Login =(props)=> {
  const classes = useStyles();
  const { message } = props;
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();

  const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { email, password });
			if (!response.user) return;
			props.history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className={classes.heroContentLog}>
      <Link to='/'>
        <CloseIcon style={{border: '1px solid', borderRadius: 50, fontSize: '40px', float: 'right', marginRight: '5rem', cursor: 'pointer', color: '#000'}}/>
      </Link>
      <Container maxWidth="md">

        <form className={classes.root} noValidate autoComplete="off" align="center">
          <Typography
            gutterBottom
            variant="h2"
            component="h2"
            className={classes.cardContentCenter}
          >
            Log into your account
          </Typography>
          {errorMessage && <p className={classes.error}>{errorMessage}</p>}
          <div>
            <TextField
              style={{ width: '50%', marginTop: 50 }}
              id="outlined-email"
              label="Type your email"
              variant="outlined"
              value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled={loading}
              className={errorMessage && classes.errorDanger}
            />
          </div>
          <div>
            <TextField
              style={{ width: '50%', marginTop: 25 }}
              id="outlined-pass"
              type="password"
              label="Type your password"
              variant="outlined"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
							disabled={loading}
              className={errorMessage && classes.errorDanger}
            />
          </div>
          <Button
            style={{
              marginTop: 50,
              width: '50%',
              paddingTop: 15,
              paddingBottom: 15,
              borderRadius: 20,
            }}
            size="large"
            variant="outlined"
            color="primary"
            onClick={handleLogin}
            disabled={loading}>Continue</Button>
        </form>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
