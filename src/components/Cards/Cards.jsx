import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
import cx from "classnames"


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading..."
    }
    // console.log(props);


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infacted)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infacted </Typography>
                        <Typography varaint="h5" >

                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2" >Number of active cases of covid-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography varaint="h5" >

                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>

                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                           <Typography variant="body2" >Number of recovered from covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography varaint="h5" >

                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>

                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2" >Number of deaths caused by covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;



