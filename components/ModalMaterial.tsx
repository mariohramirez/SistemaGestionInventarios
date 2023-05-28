import { useMutation } from '@apollo/client';
import { CREATE_MATERIAL } from '@graphql/client/materials';
import { useState } from 'react';
import { toast } from 'react-toastify';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

interface FormData {
  name: string;
  price: number;
}

const ModalMaterial = ({ onClose, isOpen }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: 0,
  });

  const [createMaterial] = useMutation(CREATE_MATERIAL);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createMaterial({
        variables: {
          ...formData,
        },
      });
      setFormData({ name: '', price: 0 });
      toast.success('Material creado correctamente');
    } catch (e) {
      toast.error('Error al crear el material');
    }
    onClose();
  };

  return isOpen ? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-lg font-medium'>Agregar un nuevo material</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='mb-2 block'>
              Nombre del material
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='w-full rounded-lg border border-gray-300 p-2 outline-none '
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='price' className='mb-2 block'>
              Saldo
            </label>
            <input
              type='number'
              name='price'
              id='price'
              min={0}
              className='w-full rounded-lg border border-gray-300 p-2 outline-none'
              value={formData.price.toString()}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  price: parseInt(e.target.value),
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

export { ModalMaterial };
