import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { connect } from "react-redux";

const Cards = (props) => {
  const {
    data: { confirmed, deaths, recovered, lastUpdate },
  } = props;

  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={
            !props.isDark
              ? cx(styles.card, styles.infected)
              : cx(styles.darkCard, styles.infected)
          }
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={props.isDark ? styles.darkInfected : null}
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              ></CountUp>
            </Typography>
            <Typography
              color="textSecondary"
              className={props.isDark ? styles.darkInfected : null}
            >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={
            !props.isDark
              ? cx(styles.card, styles.recovered)
              : cx(styles.darkCard, styles.recovered)
          }
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={props.isDark ? styles.darkRecovered : null}
            >
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              ></CountUp>
            </Typography>
            <Typography
              color="textSecondary"
              className={props.isDark ? styles.darkRecovered : null}
            >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={
            !props.isDark
              ? cx(styles.card, styles.deaths)
              : cx(styles.darkCard, styles.deaths)
          }
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={props.isDark ? styles.darkDeath : null}
            >
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              ></CountUp>
            </Typography>
            <Typography
              color="textSecondary"
              className={props.isDark ? styles.darkDeath : null}
            >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDark: state.theme.isDark,
  };
};

export default connect(mapStateToProps)(Cards);
