import React from 'react'
import Image from 'next/image';
import picture from '../public/picture.png';
import logo from '../public/logo.png';
import inventario2 from '../public/inventario2.png';
import cart from '../public/cart.png';
import user from '../public/user.png';
import card from '../public/card.png';
import Sidebar from './Sidebar';

const Inventario = () => {
    return (
        <div className='bg-[#EAF3D8] h-[1024px] w-[1440px]'>
            <Sidebar></Sidebar>
            <div className='pl-[292px] mt-[-930px] w-[1440px] grid justify-items-center'>
                <div className='w-[460px] text-center text-5xl font-poppins'>Inventarios</div>
                <div className='pt-[77px] flex space-x-[526px]'>
                    <button className='bg-[#5EFEA9] h-[65px] w-[226px] rounded-xl text-xl font-poppins border-black border-2'>Material 1</button>
                    <button className='bg-[#004737] h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins'>Agregar movimiento</button>
                </div>
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

                <div className='flex pt-[16px] pl-[800px]'>
                    <div className="w-[100px] h-[100px] bg-[#5EFEA9] rounded-full grid justify-items-center">
                        <Image src={card} alt='Card' className='pt-[25px]' />
                    </div>
                    <div className='pl-[15px] pt-[30px]'>Saldo: 50</div>
                </div>
            </div>
        </div>
    )

}

export default Inventario