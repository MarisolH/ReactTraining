import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRodolfo } from '../../actions/RodolfoAction';
import { getDataRodolfo } from '../../reducers/index';
import isEmpty from '../../utils/IsEmpty';

export default function RodolfoContainer(props) {
    let dispatch = useDispatch();
    let dataRodolfo = useSelector(getDataRodolfo);

    useEffect(() => {
        if (isEmpty(dataRodolfo)) fetchRodolfoAction();
    }, []);
    const fetchRodolfoAction = () => dispatch(fetchDataRodolfo());
    return (props.children({ dataRodolfo }));
}