import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Camera } from 'lucide-react';

const StudentRegistrationForm = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        age: '',
        contact: '',
        guardian_name: '',
        guardian_age: '',
        guardian_contact: '',
        picture: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: name === 'picture' ? files[0] : value
        }));

        if (name === 'picture' && files[0]) {
            setImagePreview(URL.createObjectURL(files[0]));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(studentData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch('http://localhost:5000/api/students', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error : ${response.status}`);
            }
         else{
            const result = await response.json();
            console.log(result);
            console.log(studentData);


            alert('Student registered successfully!');
            clearForm();
         }
        } catch (error) {
            console.error('error:', error.message);
            alert('error registering the student.');
        }
    };

    const clearForm = () => {
        setStudentData({
            name: '',
            age: '',
            contact: '',
            guardian_name: '',
            guardian_age: '',
            guardian_contact: '',
            picture: null
        });
        setImagePreview(null);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card shadow">
                        <div className="card-header bg-warning text-white">
                            <h2 className="mb-0 text-center">Student Registration</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 text-center mb-4">
                                        <div className="image-upload-container position-relative d-inline-block">
                                            {imagePreview ? (
                                                <img
                                                    src={imagePreview}
                                                    alt="Student Preview"
                                                    className="img-thumbnail rounded-circle"
                                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <div className="placeholder-image bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '150px', height: '150px' }}>
                                                    <Camera size={48} color="#6c757d" />
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                name="picture"
                                                id="picture"
                                                className="form-control-file position-absolute"
                                                onChange={handleChange}
                                                style={{ opacity: 0, top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                            />
                                        </div>
                                        <label htmlFor="picture" className="mt-2 text-muted">Click to upload picture</label>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="name" className="form-label">Student Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Enter Student Name"
                                                    value={studentData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="age" className="form-label">Age</label>
                                                <input
                                                    type="number"
                                                    name="age"
                                                    id="age"
                                                    className="form-control"
                                                    placeholder="Enter Age"
                                                    value={studentData.age}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contact" className="form-label">Contact</label>
                                            <input
                                                type="tel"
                                                name="contact"
                                                id="contact"
                                                className="form-control"
                                                placeholder="Enter Contact Number"
                                                value={studentData.contact}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="card-header text-black">
                            <p className="mb-0 text-center">Guardian Information</p>
                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="guardian_name" className="form-label">Guardian Name</label>
                                            <input
                                                type="text"
                                                name="guardian_name"
                                                id="guardian_name"
                                                className="form-control"
                                                placeholder="Enter Guardian Name"
                                                value={studentData.guardian_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="guardian_age" className="form-label">Guardian Age</label>
                                                <input
                                                    type="number"
                                                    name="guardian_age"
                                                    id="guardian_age"
                                                    className="form-control"
                                                    placeholder="Enter Guardian Age"
                                                    value={studentData.guardian_age}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="guardian_contact" className="form-label">Guardian Contact</label>
                                                <input
                                                    type="tel"
                                                    name="guardian_contact"
                                                    id="guardian_contact"
                                                    className="form-control"
                                                    placeholder="Enter Guardian Contact"
                                                    value={studentData.guardian_contact}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mt-4">
                                            <button type="button" onClick={clearForm} className="btn btn-danger btn-lg w-45">Clear</button>
                                            <button type="submit" className="btn btn-success btn-lg w-45">Register Student</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;