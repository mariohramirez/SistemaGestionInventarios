import React from "react";

const DUMMY_DATA = new Array(25).fill(null).map(() => {
  return {
    id: "clh0zouj500003o7es6axmbci",
    date: "DD-MM-YY",
    in: 50,
    out: 50
  }
})

export function TablaInventario(props: any) {

  return <div className='pb-20'>
    <table className='table-auto border-2 border-black'>
      <thead>
        <tr className='h-[90px] '>
          <th>Identificador</th>
          <th>Fecha</th>
          <th>Entrada</th>
          <th>Salida</th>
        </tr>
      </thead>
      <tbody className='bg-[#FFFFFF] overflow-y-scroll'>
        {DUMMY_DATA.map((item, index) => {
          return <tr key={`${item.id} ${index}` } className='h-10 border-2 border-black'>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.in}</td>
            <td>{item.out}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>


}
