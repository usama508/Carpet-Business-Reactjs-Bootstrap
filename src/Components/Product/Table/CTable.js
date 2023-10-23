import React from 'react';
import t1 from './t1.png';
import t2 from './t2.png';
import t3 from './t3.png';
import t4 from './t4.png';

const ComparisonTable = () => {
  const tableData = [
    {
      feature: t1,
      product1: 'Value A',
      product2: 'Value B',
      product3: 'Value C',
    },
    {
      feature: t2,
      product1: 'Value X',
      product2: 'Value Y',
      product3: 'Value Z',
    },
    {
      feature: t3,
      product1: 'Value P',
      product2: 'Value Q',
      product3: 'Value R',
    },
    {
      feature: t4,
      product1: 'Value P',
      product2: 'Value Q',
      product3: 'Value R',
    },
    // Add more rows as needed
  ];

  return (
    
    <div>
      <table>
        <tbody>
          {tableData.map((row, index) => (
            <>
            <tr key={index}>
              <td><img src={row.feature} alt="" /></td>
            </tr>
            <tr key={`product1-${index}`}>
              <td>{row.product1}</td>
            </tr>
            <tr key={`product2-${index}`}>
              <td>{row.product2}</td>
            </tr>
            <tr key={`product3-${index}`}>
              <td>{row.product3}</td>
            </tr></>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default ComparisonTable;
