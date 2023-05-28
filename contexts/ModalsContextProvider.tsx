import { MaterialModalContextProvider } from './ModalMaterialContext';
import { MovementModalContextProvider } from './ModalMovimientoContext';
import { UserModalContextProvider } from './ModalUsuarioContext';

const ModalsContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <UserModalContextProvider>
    <MaterialModalContextProvider>
      <MovementModalContextProvider>{children}</MovementModalContextProvider>
    </MaterialModalContextProvider>
  </UserModalContextProvider>
);

export { ModalsContextProvider };
