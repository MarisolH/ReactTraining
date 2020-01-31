import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles, styles } from './MarisolScreenStyles'
import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent'
import TextInput from '../../components/TextInput/TextInput'
import Typography from '@material-ui/core/Typography'
import MyButton from '../../components/MyButton'
import ModalComponent from '../../components/ModalComponent/ModalComponent'


export default function MarisolScreen(props) {
    const classes = useStyles();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const structure = () => {
        return <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={4} md container >
                <img alt='ms' width={'100%'} styles={styles.image} src={require('../../assets/miguel.png')}></img>
            </Grid>
            <Grid item xs={8} md container className={classes.gridInputs} >
                <Grid item xs={12} className={classes.gridItems} md >
                    <Typography variant='h5' align='left' className={classes.title} color='textPrimary' gutterBottom>
                        Información Personal
                        </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Nombre' value={name} setValue={setName}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Apellido' value={lastName} setValue={setLastName}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Telefono' value={phone} setValue={setPhone}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Correo' value={email} setValue={setEmail}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.buttonItem} >
                    <MyButton text='Generar' color='primary' onClickButton={handleOpenModal} />
                </Grid>
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