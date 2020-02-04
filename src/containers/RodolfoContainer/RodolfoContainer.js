import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRodolfo } from '../../actions/RodolfoActions';
import { getDataRodolfo } from 'app/reducers';
import isEmpty from 'app/utils/IsEmpty';

export default function RodolfoContainer(props) {
    let dispatch = useDispatch();
    let dataRodolfo = useSelector(getDataRodolfo);

    useEffect(() => {
        if (isEmpty(dataRodolfo)) fetchFrontAction();
    }, []);
    const fetchRodolfoAction = () => dispatch(fetchDataRodolfo());
    return (props.children({ dataRodolfo }));
}