import React from 'react';
import './styling/login.scss';
import img from './assests/pablo.jpg';
import logo from './assests/Union.png';

const Login = () => {
    return (
        <section>
            <div className='log-in'>
                <div className='col-1'>
                    <div className='logo-name'>
                        <img src={logo} alt="logo" className='logo' />
                            <h1>lendsqr</h1>
                    </div>
                    <img src={img} alt="image" className='img' />
                </div>
                <div className='col-2'>
                    <div className="opening-text">
                        <h2>
                            Welcome!
                        </h2>
                         <p>
                            Enter your details to login.
                            </p>
                    </div>
                    <div className='form'>
                        <form>
                            <div className='form-group'>
                            <input type="text" placeholder="Email" className='email' />
                            </div>
                            <div className='form-group-2'>
                            <input type="password" placeholder="Password" className='password' />
                            <span>
                                show
                            </span>
                            </div>
                        <div className='forgot-password'>
                            <a href="#">FORGOT PASSWORD?</a>
                        </div>
                        <div className='login-button'>
                            <button type="submit" className='login'>Log in</button>
                        </div>    
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;