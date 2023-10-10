import React from 'react';
import styles from './Results.module.css';

function Results({data}) {
    const headings = ["Year", "Total Savings", "Interest (Year)", "Total Interest", "Invested Capital"];

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    {headings.map( (heading,i) => <th key={'heading_' + i}>{heading}</th> )}
                </tr>
            </thead>
            <tbody>
                {data.map(({year, savingsEndOfYear, yearlyInterest, totalInterest, totalInvestedCapital}) =>
                    <tr key={'year_' + year}>
                        <td>{year}</td>
                        <td>{formatter.format(savingsEndOfYear)}</td>
                        <td>{formatter.format(yearlyInterest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestedCapital)}</td>
                    </tr>
                )}
            </tbody>
      </table>
    );
}

export default Results;