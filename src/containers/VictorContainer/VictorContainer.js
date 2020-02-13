import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataVictor } from '../../actions/VictorActions';
import { getDataVictor} from '../../reducers/index';
import isEmpty from '../../utils/IsEmpty';

export default function VictorContainer(props) {
    let dispatch = useDispatch();
    let dataVictor = useSelector(getDataVictor);

    useEffect(() => {
        if (isEmpty(dataVictor)) fetchVictorAction();
    }, []);
    const fetchVictorAction = () => dispatch(fetchDataVictor());
    return (props.children({ dataVictor }));
}