import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTypesProducts } from '../../actions/TypesProductsActions';
import { getTypesProducts } from '../../reducers';
import isEmpty from '../../utils/IsEmpty';

export default function TypesProductsContainer(props) {
    let dispatch = useDispatch();
    let dataTypesProducts = useSelector(getTypesProducts);

    useEffect(() => {
         if (isEmpty(dataTypesProducts)) fetchTypesProductsAction();
    }, []);
    const fetchTypesProductsAction = () => dispatch(fetchTypesProducts());
    return (props.children({ dataTypesProducts }));
}