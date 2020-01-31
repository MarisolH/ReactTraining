import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataMarisol } from '../../actions/MarisolActions';
import { getDataMarisol } from 'app/reducers';
import isEmpty from 'app/utils/IsEmpty';

export default function FrontContainer(props) {
    let dispatch = useDispatch();
    let dataMarisol = useSelector(getDataMarisol);

    useEffect(() => {
        if (isEmpty(dataMarisol)) fetchFrontAction();
    }, []);
    const fetchFrontAction = () => dispatch(fetchDataMarisol());
    return (props.children({ dataMarisol }));
}