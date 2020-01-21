import React from 'react'
import Grid from '@material-ui/core/Grid';

import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent';
import TextInput from '../../components/TextInput/TextInput';
// import Typography from '@material-ui/core/Typography';

import { useStyles } from './JaviScreenStyles';

export default function JaviScreen(props) {
    const classes = useStyles()
    // console.log(props)

    return <React.Fragment>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} sm container >
                <MenuBar/>
            </Grid>
        </Grid>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.rootContainer}
        >

            <Grid
                container
                direction="column"
                justify="top"
                alignItems="left"
                className={classes.rootContainer}
            >
                {/* <CardComponent title={"hola"}> */}
                    <Grid item xs={6} md={5} lg={5} sm container >
                        <img alt='' className={classes.illustration} src={require('../../assets/javier.png')}></img>
                    </Grid>
                    <Grid item xs={6} md={5} lg={5} sm container >
                        <TextInput label={"Nombre"}></TextInput>
                    </Grid>
                    <Grid item xs={6} md={5} lg={5} sm container >
                        <TextInput label={"Apellido"}></TextInput>
                    </Grid>
                {/* </CardComponent> */}
            </Grid>  
            

        </Grid>
    </React.Fragment>
}