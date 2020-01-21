import React from 'react';
import Grid from '@material-ui/core/Grid';

import MenuBar from '../../components/MenuBar/MenuBar';
import DecorationForScreen from '../../components/DecorationForScreen/DecorationForScreen'
import CardComponent from '../../components/CardComponent/CardComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { useStyles } from './ConnectedScreeStyles'

export default function ConnectedScreen(props) {
    const classes = useStyles();
    const text ={
        react:`React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. 
        Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React.`,
        redux:`Redux es una herramienta para la gestión de estado en apps Javascript que nació en 2015 de la mano de @dan_abramov. Aunque suele asociarse a React, 
        lo cierto es que es una librería framework agnostic, que vale la pena conocer aunque no vayas a trabajar con React.`,
        git:`Git es un software de control de versiones diseñado por Linus Torvalds. Git nos proporciona las herramientas para desarrollar 
        un trabajo en equipo de manera inteligente y rápida y  por trabajo nos referimos a algún software o página que implique código el cual necesitemos hacerlo con un grupo de personas.`
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
