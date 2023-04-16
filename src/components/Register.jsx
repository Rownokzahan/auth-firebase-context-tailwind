import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const Register = () => {

    const { user, createUser, signInWithGoogle } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user

                form.reset()
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="min-h-[calc(100vh-65px)] bg-base-200 flex flex-col">
            <div className='m-auto w-full py-8'>
                <h2 className='text-3xl font-bold text-center mb-8'>Please Register</h2>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                    <form onSubmit={handleRegister} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or Register With</span>
                    </div>

                    <div className='flex justify-center items-center gap-8 mb-8 '>
                        <button onClick={handleGoogleSignIn} className='shadow border p-2 rounded-md'>
                            <FcGoogle className='w-6 h-6' />
                        </button>
                        <button className='shadow border p-2 rounded-md'>
                            <ImGithub className='w-6 h-6' />
                        </button>                        
                    </div>

                    <p className='text-center mb-8'>Already have an account? <Link to='/login' className='link link-primary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;