import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const ModalUsuario = ({ onClose, isOpen }: ModalProps) => {
  const [usuario, setUsuario] = useState('');
  const [rol, setRol] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Procesar los datos del formulario
    console.log('Usuario:', usuario);
    console.log('Rol:', rol);

    // Cierra el modal
    onClose();
  };

  return isOpen ? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-lg font-medium'>Editar un usuario</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='usuario' className='mb-2 block'>
              Usuario
            </label>
            <select
              id='usuario'
              className='w-full rounded-lg border-gray-300 p-2'
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            >
              <option value=''>Seleccionar</option>
              <option value='Usuario 1'>Usuario 1</option>
              <option value='Usuario 2'>Usuario 2</option>
              <option value='Usuario 3'>Usuario 3</option>
              <option value='Usuario 4'>Usuario 4</option>
              <option value='Usuario 5'>Usuario 5</option>
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='rol' className='mb-2 block'>
              Rol
            </label>
            <select
              id='rol'
              className='w-full rounded-lg border-gray-300 p-2'
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value=''>Seleccionar</option>
              <option value='ADMIN'>ADMIN</option>
              <option value='USER'>USER</option>
            </select>
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

export { ModalUsuario };
