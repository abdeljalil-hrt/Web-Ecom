import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './SignUp.css'

function SignIn() {
    const style = {
        height: '12.7%'
    };
    const styles = {
        color: 'Black'
    }
    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <div className='title-container'>
                    <h2>Connexion</h2>
                </div>
                <div className='row clearfix'>
                    <form>
                        <div className='input-field'>
                            <span style={style}><i aria-hidden='true' className='fa fa-envelope'></i></span>
                            <input type='email' name='email' placeholder='Email' required />
                        </div>

                        <div className='input-field'>
                            <span style={style}><i aria-hidden='true' className='fa fa-lock'></i></span>
                            <input type='password' name='password' placeholder='Password' required />
                        </div>

                        <input className='submit' type='submit' value='Sign In' />


                        <Link to='/sign-up' className='linnk' >
                            Create Account
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
