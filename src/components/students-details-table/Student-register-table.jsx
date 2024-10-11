import React, { useEffect, useState } from 'react';

const StudentRegisterTable = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/studentsdata');
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
        <div>
            <h2>Registered Students</h2>
            <table>
                <thead>
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
    );
};

export default StudentRegisterTable;
