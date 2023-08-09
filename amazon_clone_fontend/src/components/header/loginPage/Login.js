import React, { useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log("form = ", formValues)
    }
    const signIn = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = "email is required !"
        }
        if (!values.password) {
            errors.password = "password is required !"
        }
        return errors;
    }
    return (
        <div className='loginPage'>
            <Link to={'/'}>
                < img className="loginPage_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="loginPage_form">
                <h1>Sign in</h1>
                <form onSubmit={signIn}>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" name="email" placeholder='Email or mobile phone number' value={formValues.email} onChange={handleChange} />
                    <h5>{formErrors.email}</h5>
                    <h5>Password</h5>
                    <input type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleChange} />
                    <h5>{formErrors.password}</h5>
                    <button className='loginPage_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to={'/signin'}>
                    <button className='loginPage_button' type='submit' >Create your Amazon Account</button>
                </Link>
            </div>
        </div >
    )
}

export default Login