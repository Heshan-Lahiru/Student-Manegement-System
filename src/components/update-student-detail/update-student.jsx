import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Updatestudent = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [student, setStudent] = useState({
        name: state.name,
        age: state.age,
        contact: state.contact,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/students/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: student.name,
                    age: student.age,
                    contact: student.contact
                }),
            });

            if (!response.ok) {
                throw new Error('Error updating student');
            }

            console.log('Student updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Student Information</h2>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Age</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Contact</label>
                <input
                    type="text"
                    className="form-control"
                    name="contact"
                    value={student.contact}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
};

export default Updatestudent;
