import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Nav from '../nav/nav';

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
            navigate('/studenttable');
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <div>
        <Nav />
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                        <div className="card-header bg-warning text-white">
                            <h2 className="card-title text-center mb-4">Update Student Information</h2>
                            </div>
                            <form>
                                <div className="mb-3 py-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={student.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 py-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        name="age"
                                        value={student.age}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 py-3">
                                    <label htmlFor="contact" className="form-label">Contact</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contact"
                                        name="contact"
                                        value={student.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="button" className="btn btn-success btn-lg" onClick={handleUpdate}>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Updatestudent;