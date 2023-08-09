import React, { useEffect, useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

function Signin() {
    const initialValues = { name: "", email: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const signIn = (e) => {
        e.preventDefault();
        console.log(formValues)
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
        if (!values.name) {
            errors.name = "name is required!"
        }
        if (!values.email) {
            errors.email = "email is required!"
        }
        if (!values.password) {
            errors.password = "password is required!"
        }
        return errors;
    }

    return (
        <div className='signinPage'>
            <Link to={'/'}>
                < img className="signinPage_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="signinPage_form">
                <h1>Create Account</h1>
                <form onSubmit={signIn}>
                    <h5>Your name</h5>
                    <input type="text" placeholder='  Your first and last name' name='name' value={formValues.name} onChange={handleChange} />
                    <h5>{formErrors.name}</h5>
                    <h5>Email</h5>
                    <input type="text" placeholder='  Email' name='email' value={formValues.email} onChange={handleChange} />
                    <h5>{formErrors.email}</h5>
                    <h5>Pssword</h5>
                    <input type="password" placeholder='  At least 6 characters' name='password' value={formValues.password} onChange={handleChange} />
                    <h5>{formErrors.password}</h5>
                    {/* <Link to={'/signin'}> */}
                    <button className='signinPage_button' type='submit'>Create New Account</button>
                    {/* </Link> */}
                </form>
                {/* <p>
                    By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p> */}
                <h5>
                    Already have an account?
                    <Link to={'/login'} className='signinPage_signinButton'>
                        Sign in
                    </Link>
                </h5>
                <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
            </div>
        </div >
    )
}

export default Signin