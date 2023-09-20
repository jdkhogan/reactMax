import React from 'react';

import './ExpensesFilter.css';

function ExpensesFilter(props) {
    const handleInput = e => props.onFilterYear(e.target.value);

    let inputs = [2023, 2022, 2021, 2020, 2019].map( (el,i) => {
        return <option key={"filterYear_" + i} value={el}>{el}</option>
    });

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='yearFilter'>Filter by year</label>
                <select id='yearFilter' onChange={handleInput}>
                    {inputs}
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;