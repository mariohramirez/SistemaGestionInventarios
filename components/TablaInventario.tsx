import React from 'react'

const TablaInventario = () => {
    return(
        <div className='pt-[42px]'>
                    <table className=' table-auto border-black border-2'>
                        <thead>
                            <tr className='h-[90px] '>
                                <th>Identificador</th>
                                <th>Fecha</th>
                                <th>Entrada</th>
                                <th>Salida</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#FFFFFF]'>
                            <tr className='h-[90px] border-black border-2'>
                                <td>clh0zouj500003o7es6axmbci</td>
                                <td>DD-MM-YY</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr className='h-[90px] border-black border-2'>
                                <td>clh0zouj500003o7es6axmbci</td>
                                <td>DD-MM-YY</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr className='h-[90px] border-black border-2'>
                                <td>clh0zouj500003o7es6axmbci</td>
                                <td>DD-MM-YY</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr className='h-[90px] border-black border-2'>
                                <td>clh0zouj500003o7es6axmbci</td>
                                <td>DD-MM-YY</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    )
}

export default TablaInventario