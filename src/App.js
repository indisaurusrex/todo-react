import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: "60%",
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>
        <Button size="small">Add something</Button>
      </CardActions>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              Todo title
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.pos} color="textSecondary">
              due date
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SimpleCard />
      </div>
    </div>
  );
}

export default App;
