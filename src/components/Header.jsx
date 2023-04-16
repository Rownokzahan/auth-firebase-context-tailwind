import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <nav>
            <div className="navbar bg-base-300 justify-between">
                <Link to='/' className='text-2xl font-bold'>Master Auth</Link>

                <div className='flex items-center gap-8'>
                    <Link to='/'>Home</Link>
                    <Link to='/orders'>Orders</Link>
                </div>

                <div>
                    {user ?
                        <div className='flex gap-8'>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} to='/login'>Logout</button>
                        </div>

                        : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;