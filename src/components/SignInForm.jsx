import React, { Component, useState } from "react";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";

const SignInForm = () => {

    const [email, setEmail] = useState()
    const [pw, setPw] = useState()

    const handleChange = (event) => {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        // let name = target.name;

        if (target.name === 'email') {
            return setEmail(value)
        }
        setPw(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("The form was submitted with the following data:");
    }
    return (
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
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
                    <FormControl success variant="standard">
                        <InputLabel htmlFor="component-success" className="formFieldLabel" style={{ color: 'white' }}>Password</InputLabel>
                        <Input
                            id="component-success"
                            name='password'
                            type='password'
                            required
                            placeholder="Enter your password"
                            value={pw}
                            onChange={handleChange}
                            style={{ color: "white" }}
                            aria-describedby="component-success-text"
                        />
                    </FormControl>
                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign In</button>{" "}
                    <Link to="/" className="formFieldLink">
                        Create an account
                    </Link>
                </div>

            </form>
        </div>
    );
}


export default SignInForm;
