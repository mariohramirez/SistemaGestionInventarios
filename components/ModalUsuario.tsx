import { useState } from 'react';

type ModalProps = {
    onClose: () => void;
    isOpen: boolean;
};

const ModalUsuario = ({ onClose, isOpen }: ModalProps) => {
    const [usuario, setUsuario] = useState("");
    const [rol, setRol] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Procesar los datos del formulario
        console.log('Usuario:', usuario);
        console.log('Rol:', rol);

        // Cierra el modal
        onClose();
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-lg font-medium mb-4">
                    Editar un usuario
                </h2>
                <form onSubmit={handleFormSubmit}>

                    <div className="mb-4">
                        <label htmlFor="usuario" className="block mb-2">
                            Usuario
                        </label>
                        <select
                            id="usuario"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        >
                            <option value="">Seleccionar</option>
                            <option value="Usuario 1">Usuario 1</option>
                            <option value="Usuario 2">Usuario 2</option>
                            <option value="Usuario 3">Usuario 3</option>
                            <option value="Usuario 4">Usuario 4</option>
                            <option value="Usuario 5">Usuario 5</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rol" className="block mb-2">
                            Rol
                        </label>
                        <select
                            id="rol"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                        >
                            <option value="">Seleccionar</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default ModalUsuario;