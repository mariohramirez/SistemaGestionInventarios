import { Material } from '@prisma/client';

interface Props {
  data?: Material[];
  loading: boolean;
  error: any;
}

const TablaMaterial = ({ data, loading, error }: Props) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='pt-10 w-full'>
      <table className=' table-auto border-2 border-black w-full'>
        <thead>
          <tr className='h-[90px] '>
            <th>Identificador</th>
            <th>Fecha de creacion</th>
            <th>Nombre</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody className='bg-[#FFFFFF]'>
          {data?.map((material) => (
            <tr key={material.id} className='h-[90px] border-2 border-black'>
              <td>{material.id}</td>
              <td>{'' + material.createdAt}</td>
              <td>{material.name}</td>
              <td>{material.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TablaMaterial };
