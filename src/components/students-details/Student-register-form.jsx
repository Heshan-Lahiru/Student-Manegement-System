import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentRegForm() {

    return (
        <div className='container'>
            <form>
            <h1>Student Information</h1>
            <hr></hr>
                <div className='flex'>
                    <div className='img-left-circle'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuR6lY1HPFS4Q_R2A5r70ECdchXmR_n1b8g&s" alt="userprofileimg" />
                    </div>


                    <div>
                        <div class="input-group mb-3">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="name" aria-label="stname" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <label>Age</label>
                            <input type="text" class="form-control" placeholder="age" aria-label="stage" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <label>contact</label>
                            <input type="text" class="form-control" placeholder="contact" aria-label="stcontact" aria-describedby="basic-addon1" />
                        </div>
                       
                   
                    <h1>Gaurdian Information</h1>
                    <hr></hr>
                    <div class="input-group mb-3">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="name" aria-label="gname" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <label>Age</label>
                            <input type="text" class="form-control" placeholder="age" aria-label="gage" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <label>contact</label>
                            <input type="text" class="form-control" placeholder="contact" aria-label="gcontact" aria-describedby="basic-addon1" />
                        </div>

                        <button type="button" class="btn btn-red">clear</button>
                        <button type="button" class="btn btn-green">Register</button>
                    </div>
                </div>


            </form>
        </div>
    );

}

export default StudentRegForm;