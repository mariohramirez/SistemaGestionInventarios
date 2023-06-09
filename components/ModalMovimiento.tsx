import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MATERIALS_BY_USER } from '@graphql/client/materials';
import { CREATE_MOVEMENT } from '@graphql/client/movements';
import { Enum_MovementType, Material } from '@prisma/client';
import { toast } from 'react-toastify';
import { useMovementModalContext } from 'contexts/ModalMovimientoContext';

type ModalProps = {
  onClose: () => void;
};

interface FormData {
  materialId: string;
  quantity: string;
  movementType: string;
}

const ModalMovimiento = ({ onClose }: ModalProps) => {
  const { openMovementModal } = useMovementModalContext();
  const { data } = useQuery<{
    materialsByUser: Material[];
  }>(GET_MATERIALS_BY_USER, {
    fetchPolicy: 'cache-first',
  });

  const [formData, setFormData] = useState<FormData>({
    materialId: '',
    quantity: '0',
    movementType: 'IN',
  });

  const [createMovement] = useMutation(CREATE_MOVEMENT);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createMovement({
        variables: {
          materialId: formData.materialId,
          quantity: parseInt(formData.quantity),
          type: formData.movementType,
        },
      });
      setFormData({ materialId: '', quantity: '0', movementType: 'IN' });
      toast.success('Movimiento creado correctamente');
    } catch (e) {
      toast.error('Error al crear el movimiento');
    }
    onClose();
  };

  return openMovementModal ? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-3'>
      <div className='w-full max-w-xl rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-lg font-medium'>
          Agregar un nuevo movimiento
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <select
              className='w-full rounded-lg border border-gray-300 p-2 outline-none'
              value={formData.materialId}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  materialId: e.target.value,
                }))
              }
            >
              <option value='' disabled>
                Selecciona un material
              </option>
              {data?.materialsByUser?.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='tipoMovimiento' className='mb-2 block'>
              Tipo de movimiento
            </label>
            <select
              className='w-full rounded-lg border border-gray-300 p-2'
              value={formData.movementType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  movementType: e.target.value,
                }))
              }
            >
              {Object.values(Enum_MovementType).map((type) => (
                <option key={type} value={type}>
                  {type === 'IN' ? 'Entrada' : 'Salida'}
                </option>
              ))}
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='saldo' className='mb-2 block'>
              Saldo
            </label>
            <input
              type='number'
              className='w-full rounded-lg border border-gray-300 p-2'
              value={formData.quantity}
              min={1}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  quantity: e.target.value ? e.target.value : '0',
                }))
              }
            />
          </div>
          <div className='flex items-center justify-end'>
            <button
              className='focus:shadow-outline mr-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400 focus:outline-none'
              type='button'
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
              type='submit'
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export { ModalMovimiento };
