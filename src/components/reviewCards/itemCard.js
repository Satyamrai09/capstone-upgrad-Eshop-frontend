import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <div>
            <img
              src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg"
              alt="Apple phone"
              height="300px"
              width="200px"
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h5" component="h2">
          
            Address Details
          </Typography>
          <br />

          <Typography className={classes.pos} color="textSecondary">
            contety
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Category
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            description
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Total price
          </Typography>
        </Grid>
      </Grid>
     
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}