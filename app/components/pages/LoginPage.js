/**
 *
 * Auth
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Security from '@material-ui/icons/Security';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from 'components/messages';

const Login = ({ onSignIn, intl }) => {
  const [redirectToReferrer] = useState(false); // TODO: change to do check user in exist in store
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: red[500],
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const login = () => {
    onSignIn({
      usernameOrEmail,
      password,
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect to="/" />;
  }

  const { formatMessage } = intl;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Security />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.login} />
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={formatMessage(messages.account)}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setUsernameOrEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={formatMessage(messages.password)}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={formatMessage(messages.remember)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            <FormattedMessage {...messages.login} />
          </Button>
        </div>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              <FormattedMessage {...messages.forgotPassword} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              <FormattedMessage {...messages.signupPrompt} />
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

Login.propTypes = {
  onSignIn: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(Login);
