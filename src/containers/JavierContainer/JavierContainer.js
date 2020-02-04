import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataJavier } from '../../actions/JavierActions';
import { getDataJavier } from 'app/reducers';
import isEmpty from 'app/utils/IsEmpty';

export default function JavierContainer(props) {
    let dispatch = useDispatch();
    let dataJavier = useSelector(getDataJavier);

    useEffect(() => {
        if (isEmpty(dataJavier)) fetchJavierAction();
    }, []);
    const fetchJavierAction = () => dispatch(fetchDataJavier());
    return (props.children({ dataJavier }));
}