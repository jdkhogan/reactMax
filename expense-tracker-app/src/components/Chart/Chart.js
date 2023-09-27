import React from 'react';
import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart({dataPoints}) {
    return <div className='chart'>
        {dataPoints.items.map(dataPoint => 
            <ChartBar 
                key={'chart_' + dataPoint.label}
                label={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={dataPoints.max}
            />
        )}
    </div>
}

export default Chart;