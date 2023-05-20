import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const ModalMovimiento = ({ onClose, isOpen }: ModalProps) => {
  const [materialId, setMaterialId] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoMovimiento, setTipoMovimiento] = useState('');
  const [saldo, setSaldo] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Procesar los datos del formulario
    console.log('Material ID:', materialId);
    console.log('Fecha:', fecha);
    console.log('Tipo de movimiento:', tipoMovimiento);
    console.log('Saldo:', saldo);

    // Cierra el modal
    onClose();
  };

  return isOpen ? (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-lg font-medium'>
          Agregar un nuevo movimiento
        </h2>
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
            <label htmlFor='fecha' className='mb-2 block'>
              Fecha
            </label>
            <input
              type='date'
              id='fecha'
              className='w-full rounded-lg border-gray-300 p-2'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='tipoMovimiento' className='mb-2 block'>
              Tipo de movimiento
            </label>
            <select
              id='tipoMovimiento'
              className='w-full rounded-lg border-gray-300 p-2'
              value={tipoMovimiento}
              onChange={(e) => setTipoMovimiento(e.target.value)}
            >
              <option value=''>Seleccionar</option>
              <option value='entrada'>Entrada</option>
              <option value='salida'>Salida</option>
            </select>
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

export { ModalMovimiento };
