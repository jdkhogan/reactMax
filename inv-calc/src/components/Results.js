import React from 'react';
import styles from './Results.module.css';

function Results({yearlyData}) {
    const headings = ["Year", "Total Savings", "Interest (Year)", "Total Interest", "Invested Capital"];

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    {headings.map( (heading,i) => <th key={'heading_' + i}>{heading}</th> )}
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((year, i) =>
                    <tr key={'year_' + (i + 1)}>
                        <td>{i + 1}</td>
                        <td>${year.savingsEndOfYear.toFixed(2)}</td>
                        <td>${year.yearlyInterest.toFixed(2)}</td>
                        <td>${year.totalInterest.toFixed(2)}</td>
                        <td>${year.totalInvestedCapital.toFixed(2)}</td>
                    </tr>
                )}
            </tbody>
      </table>
    );
}

export default Results;