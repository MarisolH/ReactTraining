import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent';
import TextInput from '../../components/TextInput/TextInput';
import MyButton from '../../components/MyButton';
import Typography from '@material-ui/core/Typography'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import JavierContainer from '../../containers/JavierContainer';


import { useStyles } from './JaviScreenStyles';


export default function JaviScreen(props) {
    const classes = useStyles()

    // console.log(props)
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);

    

    // const structure = () =>{
    //     return <Grid
    //     container
    //     direction="row"
    //     justify="center"
    //     alignItems="center"
    //     className={classes.rootContainer}
    // >
    //     <Grid xs={4} md container>
    //         <Grid item xs={6} md={5} lg={5} sm container >
    //             <img width={"200%"} alt='' className={classes.illustration} src={require('../../assets/javier.png')}></img>
    //         </Grid>
    //     </Grid>
    //     <Grid xs={8} md container direction="column" spacing={2}>
    //         <Grid item xs={8} md={5} lg={5} sm >
    //             <h1>Curso de react</h1>
    //         </Grid>
    //         <Grid item xs={8} md={5} lg={5} sm >
    //             <TextInput label={"Nombre"} setValue={setNombre} ></TextInput>
    //         </Grid>
    //         <Grid item xs={8} md={5} lg={5} sm >
    //             <TextInput label={"Apellido"} setValue={setApellido}></TextInput>
    //         </Grid>
    //         <Grid item xs={8} md={5} lg={5} sm >
    //             <TextInput label={"Teléfono"} setValue={setTelefono}></TextInput>
    //         </Grid>
    //         <Grid item xs={8} md={5} lg={5} sm >
    //             <TextInput label={"Dirección"} setValue={setDireccion}></TextInput>
    //         </Grid>
    //         <Grid>
    //             <br></br>
    //         </Grid>
            
    //         </Grid>
    // </Grid>
    // }

    const structure = () =>{
        return <Grid
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
            <JavierContainer>
                {(editParams) => {
                    console.log(editParams);
                    return(<div></div>)
                }
                }
            </JavierContainer>
        </Grid>
    </Grid>
    }

    const modalContent = () => {
        return <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}  >
                <Typography variant='title' align='left' className={classes.title} color='textPrimary' gutterBottom>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={12}  >
                <Typography variant='title' align='left' className={classes.title} color='textPrimary' gutterBottom>
                    {lastName}
                </Typography>
            </Grid>
            <Grid item xs={12}  >
                <Typography variant='title' align='left' className={classes.title} color='textPrimary' gutterBottom>
                    {phone}
                </Typography>
            </Grid>
            <Grid item xs={12}  >
                <Typography variant='title' align='left' className={classes.title} color='textPrimary' gutterBottom>
                    {email}
                </Typography>
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
            <CardComponent>
                {structure()}
            </CardComponent>
            <ModalComponent title='Información personal' confirmText={'Aceptar'} open={open} setOpen={setOpen} >
                {modalContent()}
            </ModalComponent>
            
        </Grid>

    </React.Fragment>
}