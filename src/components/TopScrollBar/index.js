import React, { useState } from 'react';
import './topScrollBar.css';

export default function TopScrollBar() {

    // Current position of page from top
    let currentPosition;
    // Width of the bar
    const [barWidth, setBarWidth] = useState(0);
    // Body and HTML elements
    const body = document.body;
    const html = document.documentElement;
    // Total height of page minus the height of the window
    const totalHeight = Math.max(
        body.clientHeight,
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    ) - window.innerHeight;

    // Standard debounce function
    function debounce(func, wait = 20, immediate = false) {
        let timeout;
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Get the width of bar based on the current position and the total height
    function getBarWidth() {
        currentPosition = html.scrollTop;
        const tempBarWidth = (currentPosition / totalHeight) * 100;
        setBarWidth(tempBarWidth);
    }

    // Event listener for scroll
    window.addEventListener('scroll', debounce(getBarWidth));

    return <div style={{ width: `${barWidth}%` }} className='top-scroll-bar'></div>
}
