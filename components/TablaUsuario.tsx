const TablaUsuario = () => (
  <div className='pt-[42px]'>
    <table className=' table-auto border-2 border-black'>
      <thead>
        <tr className='h-[90px] '>
          <th>Identificador</th>
          <th>Fecha de creacion</th>
          <th>Correo</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody className='bg-[#FFFFFF]'>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>usuario1@test.com</td>
          <td>ADMIN</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>usuario2@test.com</td>
          <td>USER</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>usuario3@test.com</td>
          <td>ADMIN</td>
        </tr>
        <tr className='h-[90px] border-2 border-black'>
          <td>clh0zouj500003o7es6axmbci</td>
          <td>DD-MM-YY</td>
          <td>usuario4@test.com</td>
          <td>USER</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { TablaUsuario };
