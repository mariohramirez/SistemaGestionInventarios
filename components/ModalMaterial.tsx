import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const ModalMaterial = ({ onClose, isOpen }: ModalProps) => {
  const [materialId, setMaterialId] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [nombreMaterial, setNombreMaterial] = useState('');
  const [saldo, setSaldo] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Procesar los datos del formulario
    console.log('Material ID:', materialId);
    console.log('Fecha de creacion:', fechaCreacion);
    console.log('Nombre del Material:', nombreMaterial);
    console.log('Saldo:', saldo);

    // Cierra el modal
    onClose();
  };

  return isOpen ? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-lg font-medium'>Agregar un nuevo material</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='materialId' className='mb-2 block'>
              Identificador del material
            </label>
            <input
              type='text'
              id='materialId'
              className='w-full rounded-lg border-gray-300 p-2'
              value={materialId}
              onChange={(e) => setMaterialId(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='fechaCreacion' className='mb-2 block'>
              Fecha de creacion
            </label>
            <input
              type='date'
              id='fecha'
              className='w-full rounded-lg border-gray-300 p-2'
              value={fechaCreacion}
              onChange={(e) => setFechaCreacion(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='nombreMaterial' className='mb-2 block'>
              Nombre del material
            </label>
            <input
              type='text'
              id='nombreMaterial'
              className='w-full rounded-lg border-gray-300 p-2'
              value={nombreMaterial}
              onChange={(e) => setNombreMaterial(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='saldo' className='mb-2 block'>
              Saldo
            </label>
            <input
              type='number'
              id='saldo'
              className='w-full rounded-lg border-gray-300 p-2'
              value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
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

export default ModalMaterial;
