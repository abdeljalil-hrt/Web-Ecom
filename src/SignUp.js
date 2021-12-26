import React from 'react'
import './SignUp.css'


function SignUp() {
    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <div className='title-container'>
                    <h2>Registration</h2>
                </div>
                <div className='row clearfix'>
                    <form>
                        <div className='input-field'>
                            <span><i aria-hidden='true' className='fa fa-envelope'></i></span>
                            <input type='email' name='email' placeholder='Email' required />
                        </div>

                        <div className='input-field'>
                            <span><i aria-hidden='true' className='fa fa-lock'></i></span>
                            <input type='password' name='password' placeholder='Password' required />
                        </div>

                        <div className='input-field'>
                            <span><i aria-hidden='true' className='fa fa-lock'></i></span>
                            <input type='password' name='password' placeholder='Re-type Password' required />
                        </div>



                        <div className='input-field'>
                            <span><i aria-hidden='true' className='fas fa-user'></i></span>
                            <input type='text' name='name' placeholder='First Name' required />
                        </div>

                        <div className='input-field'>
                            <span><i aria-hidden='true' className='fa fa-user'></i></span>
                            <input type='text' name='name' placeholder='Last Name' required />
                        </div>


                        <div className='select'>
                            <select>
                                <option>Select Coutry</option>
                                <option>France</option>
                                <option>Morocco</option>
                            </select>
                        </div>


                        <input className='submit' type='submit' value='Register' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

