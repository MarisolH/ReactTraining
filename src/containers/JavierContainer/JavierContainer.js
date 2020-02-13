import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataJavier } from '../../actions/JavierActions';
import { getDataJavier } from '../../reducers';
import isEmpty from '../../utils/IsEmpty';

export default function JavierContainer(props) {
    let dispatch = useDispatch();
    let dataJavier = useSelector(getDataJavier);

    useEffect(() => {
        if (isEmpty(dataJavier)) fetchJavierAction();
    }, []);
    const fetchJavierAction = () => dispatch(fetchDataJavier());
    console.log(dataJavier)
    return (props.children({ dataJavier }));
}