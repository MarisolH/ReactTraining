import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataMarisol } from '../../actions/MarisolActions';
import { getDataMarisol } from '../../reducers';
import isEmpty from '../../utils/IsEmpty';

export default function MarisolContainer(props) {
    let dispatch = useDispatch();
    let dataMarisol = useSelector(getDataMarisol);

    const dataTableCell = [
        { id: 'idProduct', numeric: false, disablePadding: true, label: 'id' },
        { id: 'nameProduct', numeric: true, disablePadding: false, label: 'Nombre' },
        { id: 'typeProductName', numeric: true, disablePadding: false, label: 'Tipo de producto' },
        { id: 'costProduct', numeric: true, disablePadding: false, label: 'Precio unitario ($)' },
    ]
//oermite hacer la peticion de la API
    useEffect(() => {
        if (isEmpty(dataMarisol)) fetchDataMarisolAction();
    }, []);


    const fetchDataMarisolAction = () => dispatch(fetchDataMarisol());
    return (props.children({ dataMarisol, dataTableCell }));
}