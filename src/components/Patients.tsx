import {useDispatch, useSelector, RootStateOrAny} from 'react-redux'
import { loadpatients } from "../store/patients";
import { useEffect } from "react";

const Patients = () => {
    const dispatch = useDispatch();
    const patients = useSelector((state: RootStateOrAny) => state.list);

    useEffect(() => {
        dispatch(loadpatients());
    }, [dispatch]);

    console.log(patients)

    return (
        <div>
            <h1>Patients</h1>
            <ul>
                {patients.map((post: any) => (
                    <li>{`${post.name.title} ${post.name.first} ${post.name.last} - ${post.gender} - ${post.registered.age}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Patients;