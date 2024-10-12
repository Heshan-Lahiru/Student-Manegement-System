import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Profileview = () => {
    const { id } = useParams();
    const { state } = useLocation();

    const [student, setStudent] = useState({
        name: '',
        age: '',
        contact: ''
    });

    useEffect(() => {
        if (state) {
            setStudent({
                name: state.name,
                age: state.age,
                contact: state.contact,
            });
        }
    }, [state]);



    return (
        <div class="card" >
            <div class="card-body">
                <h1 class="card-title">ID: {id}</h1>
                <h1 class="card-title">Name: {student.name}</h1>
                <h1 class="card-title">Age: {student.age}</h1>
                <h1 class="card-title">Contact: {student.contact}</h1>


            </div>

        </div>
    );
};

export default Profileview;
