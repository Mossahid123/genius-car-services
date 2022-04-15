import React from 'react';
import sleepy from '../../images/meachenic.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Meachenic is sleeping </h1>
            <img className='w-100' src={sleepy} alt="meachenic" />
        </div>
    );
};

export default NotFound;