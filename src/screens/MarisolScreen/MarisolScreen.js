import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles, styles } from './MarisolScreenStyles'
import MenuBar from '../../components/MenuBar/MenuBar';
import CardComponent from '../../components/CardComponent/CardComponent'
import TextInput from '../../components/TextInput/TextInput'
import AlertComponent from '../../components/ALertComponent/AlertComponent'
import MyButton from '../../components/MyButton'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import MarisolContainer from '../../containers/MarisolContainer/MarisolContainer'
import TableComponent from '../../components/TableComponent/TableComponent'
import SelectInput from '../../components/SelectInput/SelectInput'
import ApiService from '../../services/ApiService'
import TypesProductsContainer from '../../containers/TypesProductsContainer'

export default function MarisolScreen(props) {
    const classes = useStyles();
    const [nameProduct, setNameProduct] = useState('');
    const [costProduct, setCostProduct] = useState(0);
    const [idTypeProducto, setIdTypeProducto] = useState('');
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleOpenModal = () => {
        setOpen(true)
    }
    const saveProducts = () => {
        ApiService.saveProducts({ nameProduct, costProduct, idTypeProducto }).then(
            res => {
                console.log(res)
            },

            error => {
                setOpenAlert(true)
            }
        );

    }
    const onChangeProductsType = (e) => {
        setIdTypeProducto(e.target.value)
    }

    const modalContent = () => {
        return <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={8} md container className={classes.gridInputs} >
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Nombre del producto' value={nameProduct} setValue={setNameProduct}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TextInput label='Precio Unitario' value={costProduct} type={'number'} setValue={setCostProduct}></TextInput>
                </Grid>
                <Grid item xs={12} className={classes.gridItems} md >
                    <TypesProductsContainer>
                        {(params) => {
                            return (
                                <SelectInput title='Tipo de producto'
                                    value={idTypeProducto}
                                    setValue={setIdTypeProducto}
                                    items={params.dataTypesProducts.data !== undefined ? params.dataTypesProducts.data : []}
                                    onChange={onChangeProductsType}
                                />
                            )
                        }
                        }
                    </TypesProductsContainer>
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
            <Grid item xs={12} sm container className={classes.paddingroot} >
                <MyButton text='Agregar Producto' color='primary' onClickButton={handleOpenModal}></MyButton>
            </Grid>
            <Grid item xs={12} sm container className={classes.paddingroot}>
                <MarisolContainer >
                    {(editParams) => {
                        console.log(editParams)
                        return (
                            <TableComponent
                                rowData={editParams === undefined ? []: editParams.dataMarisol}
                                dataTableCell={editParams.dataTableCell === undefined ? [] : editParams.dataTableCell}
                            />
                        )
                    }
                    }
                </MarisolContainer>
            </Grid>
            {open ? <ModalComponent title='Agregar nuevo producto' confirmText={'Guardar'} open={open} setOpen={setOpen} onSave={saveProducts} >
                {modalContent()}
            </ModalComponent> : ''}
            <AlertComponent openAlert={openAlert} setOpenAlert={setOpenAlert} type={'error'} message='Ocurrio un error al crear producto. Intente más tarde!' />
        </Grid>
    </React.Fragment>
}