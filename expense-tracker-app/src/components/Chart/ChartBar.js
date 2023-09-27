import React from 'react';

import "./ChartBar.css";

function ChartBar({label, value, maxValue}) {
    let barFillHeight = '0%';

    if (maxValue) barFillHeight = Math.round(100 * value / maxValue) + '%';

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{label}</div>
    </div>
}

export default ChartBar;