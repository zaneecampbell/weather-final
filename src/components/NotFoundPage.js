import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const NotFoundPage = () => (
  <div>
    <Grid>
      <Paper style={{height: '100vh', fontSize: '3.5vw'}}>
        Not Found - <Link to="/">To Portfolio Page</Link>
      </Paper>
    </Grid>
  </div>
);

export default NotFoundPage;

// Done