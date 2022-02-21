import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";


const SignUpForm = () => {

    const [fname, setFN] = useState()
    const [lname, setLN] = useState()
    const [pw, setPw] = useState()
    const [cpw, setCpw] = useState()
    const [email, setEmail] = useState()
    const [check, setCheck] = useState()
    // console.log(useState())
    const handleChange = (event) => {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        if (name === 'fname') {
            setFN(value);
        } else if (name === 'lname') {
            setLN(value);
        }
        else if (name === 'password') {
            setPw(value);
        } else if (name === 'cpassword') {
            setCpw(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setCheck(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("The form was submitted with the following data:");
    }


    return (
        <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">

                <div className="formField">
                    <FormControl success variant="standard">
                        <InputLabel htmlFor="component-success" className="formFieldLabel" style={{ color: 'white' }}>First Name</InputLabel>
                        <Input
                            id="component-success"
                            name='fname'
                            placeholder="Enter your first name"
                            value={fname}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-success-text"
                        />
                    </FormControl>
                </div>

                <div className="formField">
                    <FormControl success variant="standard">
                        <InputLabel htmlFor="component-success" className="formFieldLabel" style={{ color: 'white' }}>Last Name</InputLabel>
                        <Input
                            id="component-success"
                            name='lname'
                            placeholder="Enter your last name"
                            value={lname}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-success-text"
                        />
                    </FormControl>
                </div>
                <div className="formField">
                    <FormControl success variant="standard">
                        <InputLabel htmlFor="component-success" className="formFieldLabel" style={{ color: 'white' }}>Password</InputLabel>
                        <Input
                            id="component-success"
                            name='password'
                            type='password'
                            placeholder="Enter your password"
                            value={pw}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-success-text"
                        />
                    </FormControl>
                </div>

                <div className="formField">
                    <FormControl error={pw !== cpw} variant="standard">
                        <InputLabel htmlFor="component-error" className="formFieldLabel" style={{ color: 'white' }}>Confirm Password</InputLabel>
                        <Input
                            id="component-error"
                            name='cpassword'
                            type='password'
                            placeholder="Confirm your password"
                            value={cpw}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-error-text"
                        />
                        <FormHelperText id="component-success-text">Error</FormHelperText>
                    </FormControl>
                </div>
                <div className="formField">
                    <FormControl success variant="standard">
                        <InputLabel htmlFor="component-success" className="formFieldLabel" style={{ color: 'white' }}>E-mail Address</InputLabel>
                        <Input
                            id="component-success"
                            name='email'
                            type='email'
                            required={true}
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-success-text"
                        />
                    </FormControl>
                </div>

                <div className="formField">
                    <label className="formFieldCheckboxLabel">
                        <input
                            className="formFieldCheckbox"
                            type="checkbox"
                            name="hasAgreed"
                            value={check}
                            onChange={handleChange}
                        />{" "}
                        I agree all statements in{" "}
                        <a href="null" className="formFieldTermsLink">
                            terms of service
                        </a>
                    </label>
                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign Up</button>{" "}
                    <Link to="/sign-in" className="formFieldLink">
                        I'm already member
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
