import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import GridComp from '../../components/CardComponent/CardComponent';

import MenuBar from '../../components/MenuBar/MenuBar';
// import Typography from '@material-ui/core/Typography';
import { useStyles } from './VicScreenStyles';
import Modal from '../../components/ModalComponent/ModalComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import VictorContainer from 'containers/VictorContainer/Index';

export default function VicScreen(props) {

    const classes = useStyles()
    // console.log(props)
    const structure = () => {
        return <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            className={classes.rootContainer}>
            <Grid xs={4} md container>
                <Grid item xs={6} md={5} lg={5} sm container >
                    <img width={"200%"} alt='' className={classes.illustration} src={require('../../assets/victor.png')}></img>
                </Grid>
            </Grid>
            <Grid xs={8} md container direction="column">
                <Grid item xs={8} md={5} lg={5} sm container>
                    <Grid
                        container
                        direction="column"
                        justify="right"
                        alignItems="right">
                        <h2>Experiencia Profesional</h2>
                        <TextField label="Titulo"></TextField>
                        <div></div>
                        <TextField label="Compañia"></TextField>
                        <div></div>
                        <TextField label="Ubicacion"></TextField>
                        <div></div>
                        <TextField label="Año de Finalizacion"></TextField>
                        <div></div>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm container direction="column" alignItems="flex-end">
                    <Grid item xs={12} md={5} lg={5} sm container>
                        {/* <Button variant ="contained" color= {props.color} onClick={(e)=>console.log(e)}>
            GUARDAR
    </Button > */}
                        <Modal ></Modal>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    }
    return <React.Fragment>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} sm container >
                <MenuBar />
            </Grid>
        </Grid>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.rootContainer}
        >
            <Card className={classes.neuphormism}>
                <CardComponent>
                    {structure()}
            </CardComponent>

            </Card>

            <VictorContainer>
                {(editParams) =>{
                    console.log(editParams)
                    return(
                        <div></div>
                    )
                }}
            </VictorContainer>
        </Grid>

    </React.Fragment>
}

  //     <Typography variant='h6' align='center' className={classes.title} color='textPrimary' gutterBottom>
    //     {props.title}
    // </Typography>
    // <Typography variant='caption' className={classes.text} color='textSecondary' gutterBottom>
    //     {props.text}
    //     </Typography>