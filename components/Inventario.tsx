import React from 'react'
import Image from 'next/image';
import picture from '../public/picture.png';
import logo from '../public/logo.png';
import inventario2 from '../public/inventario2.png';
import cart from '../public/cart.png';
import user from '../public/user.png';
import card from '../public/card.png';

const Inventario = () => {
    return (
        <div className='bg-[#EAF3D8] h-[1024px] w-[1440px]'>
            <div className='bg-[#004737] h-[1024px] w-[292px]'>
                <div className='grid justify-items-center'>
                    <Image src={picture} alt='Picture' className='pt-[49px]' />
                    <div className='pt-[18px] text-white text-xl font-poppins'>Ava Williams</div>
                    <div className='pt-[65px]'></div>
                    <button className='bg-[#5EFEA9] h-[65px] w-[226px] rounded-xl text-xl font-poppins'>
                        <div className='flex justify-center'><Image src={inventario2} alt='Inventario' className='ml-[-60px] mr-[10px]' />Inventarios</div>
                    </button>
                    <div className='pt-[65px]'></div>
                    <button className='h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins'>
                        <div className='flex justify-center'><Image src={cart} alt='cart' className='ml-[-60px] mr-[10px]' />Materiales</div>
                    </button>
                    <div className='pt-[65px]'></div>
                    <button className='h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins'>
                        <div className='flex justify-center'><Image src={user} alt='user' className='ml-[-60px] mr-[10px]' />Usuarios</div>
                    </button>
                    <Image src={logo} alt='Logo' className='pl-[47px] pr-[47px] pt-[280px]' />
                </div>
            </div>
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