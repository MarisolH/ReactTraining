import React,{useState} from 'react'

import CardContent from '@material-ui/core/CardContent';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuBar from '../../components/MenuBar/MenuBar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './RodoScreenStyles';
import CardComponent from '../../components/CardComponent/CardComponent';
import TextInput from '../../components/TextInput/TextInput';
import RodolfoContainer from '../../containers/RodolfoContainer/RodolfoContainer.js'

export default function RodoScreen(props) {
    const classes = useStyles()
    //console.log(props)
    const text = {
        listaDeLabel: [
            {
                titulo: 'Información Escolar'
                , Escuela: 'Escuela'
                , Licenciatura: 'Licenciatura'
                , Campodeestudio: 'Campo de estudio'
                , AñoFinal: 'Año final'
            }
        ]
    }
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
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

            <CardComponent alignItems='right' title={<Typography variant="h3" component="h2"> {text.listaDeLabel[0].titulo}</Typography>}>

                <Grid container
                    direction='row'
                    justify='center'
                    alignItems='center'>
                    <Grid item xs={6}>
                        <img alt='' className={classes.img} src={require('../../assets/rodolfo.png')}></img>
                    </Grid>
                    <Grid xs={6} container
                        direction='column'
                        justify='center'
                        alignItems='flex-end'>
                        <Typography component="h1" align='center' className={classes.title} container >
                            {text.listaDeLabel[0].titulo}
                        </Typography>
                        <Grid item xs={12}>
                            <TextField className={classes.pos} label={"Nombre"} setValue={setNombre} ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.pos} label={text.listaDeLabel[0].Licenciatura} /*setValue={text.ListaDeValues[0].setLicenciatura}*/></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.pos} label={text.listaDeLabel[0].Campodeestudio} /*setValue={text.ListaDeValues[0].setCampodeestudio}*/></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.pos} label={text.listaDeLabel[0].AñoFinal} /*setValue={text.ListaDeValues[0].setAñoFinal}*/></TextField>
                        </Grid>
                        <Grid>
                            <ModalComponent title={'Guardar'} buttonText={'Guardar'} nombreusuario={nombre} /*apellidousuario={text.ListaDeValues[0].Licenciatura} telefonousuario={text.ListaDeValues[0].Campodeestudio} direccionusuario={text.ListaDeValues[0].AñoFinal}*/ confirmText={'Cerrar'} />
                        </Grid>
                    </Grid>
                </Grid>


            </CardComponent>

            <RodolfoContainer>
                {
                    (editparams)=>{console.log(editparams)
                    return <div></div>
                    }
                }
            </RodolfoContainer>



        </Grid>
    </React.Fragment>
}