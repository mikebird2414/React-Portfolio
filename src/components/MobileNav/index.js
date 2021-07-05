import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './mobileNav.css';

export default function MobileNav() {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='mobile-navbar uk-position-fixed uk-width-1-1 uk-flex'>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link 
                    to='/' 
                    className={`uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 ${currentPath === '/' && 'active'}`} 
                >
                    <span uk-icon="icon: user"></span>
                    <span>About</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link 
                    to='/portfolio' 
                    className={`uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 ${currentPath === '/portfolio' && 'active'}`}
                >
                    <span uk-icon="icon: code"></span>
                    <span>Portfolio</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link 
                    to='/graphic-design' 
                    className={`uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 ${currentPath.includes('/graphic-design') && 'active'}`}
                >
                    <span uk-icon="icon: folder"></span>
                    <span>Design</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link 
                    to='/posts' 
                    className={`uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 ${currentPath === '/posts' && 'active'}`}
                >
                    <span uk-icon="icon: commenting"></span>
                    <span>Posts</span>
                </Link>
            </div>
            <div className='icon-nav uk-width-1-5 uk-height-1-1'>
                <Link 
                    to='/contact' 
                    className={`uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1 ${currentPath === '/contact' && 'active'}`}
                >
                    <span uk-icon="icon: mail"></span>
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    )
}
