import { MovementWithMovementType } from 'types';

interface Props {
  data?: MovementWithMovementType[];
  loading: boolean;
  error: any;
}

const TablaInventario = ({ data, loading, error }: Props) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='pb-20 pt-[42px]'>
      <table className='table-auto border-2 border-black'>
        <thead>
          <tr className='h-[90px]'>
            <th>Identificador</th>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody className='bg-[#FFFFFF]'>
          {data?.map((movement) => (
            <tr key={movement.id} className='h-[90px] border-2 border-black'>
              <td>{movement.id}</td>
              <td>{'' + movement.createdAt}</td>
              <td>
                {movement.movementType.name === 'IN' ? movement.quantity : ''}
              </td>
              <td>
                {movement.movementType.name === 'OUT' ? movement.quantity : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TablaInventario };
