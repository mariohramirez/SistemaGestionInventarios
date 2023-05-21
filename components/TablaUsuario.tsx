import { UserWithRole } from 'types';

interface Props {
  data?: UserWithRole[];
  loading: boolean;
  error: any;
}

const TablaUsuario = ({ data, loading, error }: Props) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
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
          {data?.map((user) => (
            <tr className='h-[90px] border-2 border-black' key={user.id}>
              <td>{user.id}</td>
              <td>{'' + user.createdAt}</td>
              <td>{user.email}</td>
              <td>{user.role.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TablaUsuario };
