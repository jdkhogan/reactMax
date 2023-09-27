import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart({items}) {
    const chartItems = [
        {label: 'Jan', value: 0 },
        {label: 'Feb', value: 0 },
        {label: 'Mar', value: 0 },
        {label: 'Apr', value: 0 },
        {label: 'May', value: 0 },
        {label: 'Jun', value: 0 },
        {label: 'Jul', value: 0 },
        {label: 'Aug', value: 0 },
        {label: 'Sep', value: 0 },
        {label: 'Oct', value: 0 },
        {label: 'Nov', value: 0 },
        {label: 'Dec', value: 0 }
    ];

    let total = 0;

    items.map(item => {
        // get month
        const month = item.date.getMonth();
        const amount = parseFloat(item.amount);
        chartItems[month].value += amount;
        total += amount;
    });

    return items.length ? <Chart dataPoints={{items: chartItems, max: total}}/> : '';
}

export default ExpensesChart;