import React from 'react';
import error from '../Assets/devmhimran-error.gif'

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;