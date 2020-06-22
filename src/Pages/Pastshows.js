import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Split from "react-split";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Split>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
                <p>Photo show</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Link to="/adamaslan">Adam Aslan </Link>
              xs=9 Pooop poooooooop
            </Paper>
          </Grid>
        </Grid>
      </Split>
    </div>
  );
}
