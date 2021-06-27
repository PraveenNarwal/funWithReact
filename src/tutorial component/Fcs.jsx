import React, { useState } from 'react'

function Fcs() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({ ...formData, [name]: value });
  }
  return (
    <React.Fragment>
      {/* write your code here */}
      <form>
        <div className="form-field">
          <label>Full Name:</label>
          <input type="text" onChange={handleChange}
            className="fullname" name="fullname" />
        </div>
        <div className="form-field">
          <label>Email Id:</label>
          <input type="text" onChange={handleChange}
            className="email" name="email" />
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea onChange={handleChange}
            className="Message" name="Message" />
        </div>

      </form>
      <div className="container">
        <div className="res-name"> {formData.fullname}</div>
        <div className="res-email">{formData.email} </div>
        <div className="res-message">{formData.Message} </div>
      </div>
    </React.Fragment>
  );
};

export default Fcs


