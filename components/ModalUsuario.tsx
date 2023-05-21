import { useMutation, useQuery } from '@apollo/client';
import { GET_USERS, UPDATE_USER_ROLE } from '@graphql/client/users';
import { Enum_RoleName } from '@prisma/client';
import { useState } from 'react';
import { UserWithRole } from 'types';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

interface FormData {
  userId: string;
  newRole: string;
}

const ModalUsuario = ({ onClose, isOpen }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    userId: '',
    newRole: '',
  });

  const { data } = useQuery<{
    users: UserWithRole[];
  }>(GET_USERS, {
    fetchPolicy: 'cache-first',
  });

  const [updateUserRole] = useMutation(UPDATE_USER_ROLE);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateUserRole({
        variables: {
          userId: formData.userId,
          role: formData.newRole,
        },
      });
      setFormData({ userId: '', newRole: '' });
    } catch (e) {
      console.error(e);
    }

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
              value={formData.userId}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  userId: e.target.value,
                }))
              }
            >
              <option value=''>Seleccionar</option>
              {data?.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='rol' className='mb-2 block'>
              Rol
            </label>
            <select
              id='rol'
              className='w-full rounded-lg border-gray-300 p-2'
              value={formData.newRole}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  newRole: e.target.value,
                }))
              }
            >
              <option value=''>Seleccionar</option>
              {Object.values(Enum_RoleName).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
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
