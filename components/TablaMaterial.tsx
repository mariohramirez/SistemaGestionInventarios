import React from 'react';

const TablaMaterial = () => (
  <div className='pt-[42px]'>
    <table className=' table-auto border-2 border-black'>
      <thead>
        <tr className='h-[90px] '>
          <th>Identificador</th>
          <th>Fecha de creacion</th>
          <th>Nombre</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody className='bg-[#FFFFFF]'>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>Material 1</td>
          <td>50</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>Material 2</td>
          <td>50</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>Material 3</td>
          <td>50</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>Material 4</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TablaMaterial;
