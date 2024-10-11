import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentRegisterTable = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/students');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registered Students</h2>
            <div className="table-responsive">
                <table class="table table-dark table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentRegisterTable;
