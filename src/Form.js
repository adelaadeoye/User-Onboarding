import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    backgroundColor: theme.palette.secondary.main,
  },
  Form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUp({ values, errors, touched, status }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src="https://yt3.ggpht.com/a/AGF-l7_fWIxfqhPFhYinArBLK_yFZRoAmAVVEicllA=s900-c-k-c0xffffffff-no-rj-mo" width="40px" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              < Field type= "text" name="fName" placeholder="First Name"/>
              {touched.fName && errors.fName && (
          <p className="error">{errors.fName}</p>
        )}
           
            </Grid>
            <Grid item xs={12} sm={6}>
            <Field type= "text" name="lName" placeholder="Last Name"/>
              {touched.lName && errors.lName && (
          <p className="error">{errors.lName}</p>
        )} 
            </Grid>
            <Grid item xs={12}>
            <Field type= "email" name="email" placeholder="xyz@g.com"/>
            {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )} 
            </Grid>
            <Grid item xs={12}>
            <Field type= "password" name="password" placeholder="*******"/>
            {touched.password && errors.password && (
          <p className="error">{errors.password}</p> 
        )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Agree By all Terms and conditions and am glad to be a Member"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
const  FormikMemberForm = withFormik({
    mapPropsToValues ({fName,lName, email, password}){
        return {
            fName: fName|| "",
            lName: lName||"",
            email: email||"",
            password:password||""
        };
    },
    validationSchema: Yup.object().shape({
        fName: Yup.string().required("You must put a First Name"),
        email: Yup.string().required()
      }),
})(SignUp);
export default FormikMemberForm;