import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const StudentRegisterTable = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/students');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched students:', data);
            setStudents(data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };


    const deleteStudent = async (id) => {
        try {
            console.log('Attempting to delete student with ID:', id);
            const response = await fetch(`http://localhost:5000/api/students/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error deleting student');
            }

            console.log('Deleted student with ID:', id);
            setStudents(students.filter(student => student.id !== id));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const handleUpdate = (student) => {
        navigate(`/update/${student.id}`, { state: student });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registered Students</h2>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.contact}</td>
                                <td>
                                    <button type="button" onClick={() => handleUpdate(student)} className="btn btn-success w-15">Update</button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => deleteStudent(student.id)}
                                        className="btn btn-danger w-15"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentRegisterTable;
