import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentRegForm = () => {

    const [selectedImage, setSelectedImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuR6lY1HPFS4Q_R2A5r70ECdchXmR_n1b8g&s');

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className="container mt-5">
      <form className="bg-light p-4 rounded shadow">
        <h2 className="text-center mb-4">Student Registration</h2>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
         
      <div className="bg-secondary text-white rounded-circle d-inline-flex justify-content-center align-items-center"
        style={{ width: '150px', height: '150px' }}>
        <img src={selectedImage} alt="uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
      </div>

      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
   
          </div>
          <div className="col-md-8">
            <h4 className="mb-3">Student Information</h4>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Name</label>
              <input type="text" className="form-control" id="studentName" placeholder="Enter student name" />
            </div>
            <div className="mb-3">
              <label htmlFor="studentAge" className="form-label">Age</label>
              <input type="number" className="form-control" id="studentAge" placeholder="Enter student age" />
            </div>
            <div className="mb-3">
              <label htmlFor="studentContact" className="form-label">Contact</label>
              <input type="tel" className="form-control" id="studentContact" placeholder="Enter student contact" />
            </div>
          </div>
        </div>

        <h4 className="mt-4 mb-3">Guardian Information</h4>
        <div className="mb-3">
          <label htmlFor="guardianName" className="form-label">Name</label>
          <input type="text" className="form-control" id="guardianName" placeholder="Enter guardian name" />
        </div>
        <div className="mb-3">
          <label htmlFor="guardianAge" className="form-label">Age</label>
          <input type="number" className="form-control" id="guardianAge" placeholder="Enter guardian age" />
        </div>
        <div className="mb-3">
          <label htmlFor="guardianContact" className="form-label">Contact</label>
          <input type="tel" className="form-control" id="guardianContact" placeholder="Enter guardian contact" />
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-danger me-2">Clear</button>
          <button type="submit" className="btn btn-success">Register</button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegForm;