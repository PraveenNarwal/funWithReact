import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField';

function Fcsone() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({ email: false, password: false });

    function isValidEmail(val) {
        const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(.[A-Z0-9-]+)+$/i;
        if (validEmailRegEx.test(val)) {
            return true;
        }
        return false;
    }

    function isValidPassword(val) {
        const validPasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        if (validPasswordRegEx.test(val)) {
            return true;
        }
        return false;
    }

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        if (name === "email" && !isValidEmail(value)) {
            setError({ ...error, [name]: true, msg: "Invalid Email!" });
            return;
        } else if (name === "password" && !isValidPassword(value)) {
            setError({
                ...error,
                [name]: true,
                msg:
                    "At least 8 charater, with 1 uppercase, 1 lowercase, 1 numeric and 1 special caracter",
            });
            return;
        } else {
            setError({ ...error, [name]: false, msg: "" });
        }
        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
            {/* write your code here */}
            <div className="container">
                <div className="res-fullname">
                    {/* <TextField className="fullname" name="fullname" label="Full Name" helperText="" onChange={handleChange} /> */}
                    {formData.fullname} </div>
                <div className="res-email">
                    {/* <TextField className="email" name="email" label="Email" helperText={error.email ? error.msg : ""} onChange={handleChange} /> */}
                    {setFormData} </div>
                {/* <TextField type="password" className="password" name="password" label="Password" helperText={error.password ? error.msg : ""} error={error.password} onChange={handleChange} /> */}

            </div>
        </>
    );
};

export default Fcsone






/*
Wrap the below content in "form" element
    1. Create a "TextField" which is already inported from Material UI with following attributes:
        a. class="fullname".
        b. name="fullname".
        c. label="Full Name"
        d. helperText=""
        e. onChange trigger "handleChange" function
          <TextField className="fullname" name="fullname" label="Full Name"  helperText=""  onChange={handleChange}/>

    2. Create a "TextField" with following attributes:
        a. error={error.email}
        b. class="email"
        c. name="email"
        d. label="Email"
        e. helperText={error.email ? error.msg : ""}
        f. onChange trigger "handleChange" function

    3. Create a "TextField" with following attributes:
        a. error={error.password}
        b. class="password"
        c. name="password"
        d. label="Password"
        e. helperText={error.password ? error.msg : ""}
        f. type="password"
        g. onChange trigger "handleChange" functio

We need to display form data in real-time to make sure that we are storing form data.

Wrap the following content in "div" with class="container"
    1. Create a "div" with class="res-fullname" which should render fullname.
    2. Create a "div" with class="res-email" which should render email.

*/
