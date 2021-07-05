import React from 'react';
import './pages.css';
import ButtonPrimary from '../components/ButtonPrimary';

export default function NotFound() {
    return (
        <div className='container'>
            <div className='not-found-wrapper'>
                <h1>404</h1>
                <p>Oops! Page not found.</p>
                <ButtonPrimary text='Go back home' path='/' />
            </div>
        </div>
    )
}
