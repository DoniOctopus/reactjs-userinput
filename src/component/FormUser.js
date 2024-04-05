import React, { useState } from 'react';
import '../util/css/UserForm.css';
import {submitUserData} from "../helper/userAPI";


function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        identity_number: '',
        email: '',
        date_of_birth: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Cek jika semua field terisi
        if (!formData.name || !formData.identity_number || !formData.email || !formData.date_of_birth) {
            alert('Please fill out all fields');
            return;
        }

        const result = await submitUserData(formData);
        alert(result.message);
    };


    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Identity Number:</label>
                    <input type="text" name="identity_number" value={formData.identity_number} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email :</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
