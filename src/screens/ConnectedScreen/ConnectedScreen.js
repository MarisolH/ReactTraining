import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MenuBar from '../../components/MenuBar/MenuBar';
import DecorationForScreen from '../../components/DecorationForScreen/DecorationForScreen'
import CardComponent from '../../components/CardComponent/CardComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { useStyles, DivProjects } from './ConnectedScreeStyles'
import texts from '../../utils/textsBebidas'

export default function ConnectedScreen(props) {
    const classes = useStyles();
    const text ={
        react:texts.react,
        redux:texts.redux,
        git:texts.git,
    } 
    

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm container >
                    <MenuBar />
                    <DecorationForScreen title={`Keep learning!`}/>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} md  container className={classes.rootContainer}>
                    <CardComponent title={'¿Qué es React?'} text={text.react} />
                </Grid>
                <Grid item xs={12} sm container className={classes.rootContainer}>
                    <CardComponent title={'¿Qué es Redux?'} text={text.redux}/>
                </Grid>
                <Grid item xs={12} sm container className={classes.rootContainer}>
                    <CardComponent title={'¿Qué es Git?'} text={text.git} />
                </Grid>
            </Grid>
            <DivProjects>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm container >
                        <Typography variant='h3' align='center' className={classes.title} color='textPrimary' gutterBottom>
                            {texts.titleProjects}
                        </Typography>
                    </Grid>
                </Grid>
            
            </DivProjects>
             <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} md  container className={classes.rootContainer}>
                    <CardComponent actions={ ()=> props.history.push('/BebidasScreen')} title={'¿Te gustaría buscar alguna bebida?'} text={texts.bebidas} />
                </Grid>
                <Grid item xs={12} sm container className={classes.rootContainer}>
                    <CardComponent title={'¿Qué es Redux?'} text={text.redux}/>
                </Grid>
                <Grid item xs={12} sm container className={classes.rootContainer}>
                    <CardComponent title={'¿Qué es Git?'} text={text.git} />
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm container >
                    <FooterComponent />
                </Grid>
            </Grid>
        </React.Fragment>

    );
}
