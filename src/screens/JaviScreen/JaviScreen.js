import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent';
import TextInput from '../../components/TextInput/TextInput';
import MyButton from '../../components/MyButton';
// import Typography from '@material-ui/core/Typography';
import ModalComponent from '../../components/ModalComponent/ModalComponent'

import { useStyles } from './JaviScreenStyles';


export default function JaviScreen(props) {
    const classes = useStyles()
    // console.log(props)
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
            <Card className={classes.neuphormism}>
                <CardContent>
                    {/* <CardComponent title={"hola"} rootContainer>  */}
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.rootContainer}
                    >
                        <Grid xs={4} md container>
                            <Grid item xs={6} md={5} lg={5} sm container >
                                <img width={"200%"} alt='' className={classes.illustration} src={require('../../assets/javier.png')}></img>
                            </Grid>
                        </Grid>
                        <Grid xs={8} md container direction="column" spacing={2}>
                            <Grid item xs={8} md={5} lg={5} sm >
                                <h1>Curso de react</h1>
                            </Grid>
                            <Grid item xs={8} md={5} lg={5} sm >
                                <TextInput label={"Nombre"} setValue={setNombre} ></TextInput>
                            </Grid>
                            <Grid item xs={8} md={5} lg={5} sm >
                                <TextInput label={"Apellido"} setValue={setApellido}></TextInput>
                            </Grid>
                            <Grid item xs={8} md={5} lg={5} sm >
                                <TextInput label={"Teléfono"} setValue={setTelefono}></TextInput>
                            </Grid>
                            <Grid item xs={8} md={5} lg={5} sm >
                                <TextInput label={"Dirección"} setValue={setDireccion}></TextInput>
                            </Grid>
                            <Grid>
                                <br></br>
                            </Grid>
                            <Grid>
                                <ModalComponent title={'Datos del Usuario'} buttonText={'Registrar'} nombreusuario={nombre} apellidousuario={apellido} telefonousuario={telefono} direccionusuario={direccion} confirmText={'Cerrar'} />
                                {/* <MyButton value={"Registrar"} text={"Registrar"} >
                            
                        </MyButton> */}
                            </Grid>
                        </Grid>





                    </Grid>
                    {/* </CardComponent>  */}
                </CardContent>
            </Card>
        </Grid>

    </React.Fragment>
}