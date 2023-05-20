import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const RegistrationForm = () => {
    const initialFormData = {
        name: '',
        CSN: '',
        Approved: '',
  
      };
  const [user, setUser] = useState(initialFormData);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setUser({
      ...user,
      Approved: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the server
      const response = await axios.post('http://localhost:5000/api/register', user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  };

    return (
      <>
    <form class="form container mx-auto" onSubmit={handleSubmit}>
                <div class="form-body">
                <div>
                    <label className="form__label" htmlFor="name">Name:</label>
                    <input
                    className="form__input"        
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form__label" htmlFor="email">CSN:</label>
                    <input
                    className="form__input"  
                    type="text"
                    id="CSN"
                    name="CSN"
                    value={user.CSN}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form__label" htmlFor="">Approved: </label>
                    
                    <select className="form__input" name="selectedOption" value={user.Approved} onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>
                </div>            
        <div className="footer">
            <button className="btn btn-success " type="submit">Register</button>          
        </div>
      </form>
      </>
    
      
  );
};

export default RegistrationForm;
