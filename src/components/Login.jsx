import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { logIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(userCredential => {
                const user = userCredential.user
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-[calc(100vh-65px)] bg-base-200 flex flex-col">
            <div className='m-auto w-full py-8'>
                <h2 className='text-3xl font-bold text-center mb-8'>Please Login</h2>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className='text-center mb-8'>Don't have an account? <Link to='/register' className='link link-primary'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;