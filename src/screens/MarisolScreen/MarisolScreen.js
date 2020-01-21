import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles, styles } from './MarisolScreenStyles'
import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent'
import TextInput from '../../components/TextInput/TextInput'


export default function MarisolScreen() {
    const classes = useStyles();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const structure = () => {
        return <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid xs={4} md container >
                    <img alt='ms' styles={styles.image} src={require('../../assets/miguel.png')}></img>
            </Grid>
            <Grid xs={8} md container className={classes.gridInputs} >
                <Grid xs={12} md >
                    <TextInput label='Nombre' value={name} setValue={setName}></TextInput>
                </Grid>
                <Grid xs={12} md >
                    <TextInput label='Apellido' value={lastName} setValue={setLastName}></TextInput>
                </Grid>
                <Grid xs={12} md >
                    <TextInput label='Telefono' value={phone} setValue={setPhone}></TextInput>
                </Grid>
                <Grid xs={12} md >
                    <TextInput label='Correo' value={email} setValue={setEmail}></TextInput>
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
            <CardComponent structure={structure()}/>

            {/* {structure()} */}


        </Grid>
    </React.Fragment>
}