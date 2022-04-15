import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, id } = service
    const navigate = useNavigate()
    const nevigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    };
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='car repair' />
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>nevigateToServiceDetail(id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;