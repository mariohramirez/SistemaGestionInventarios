import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface MovementModalContextProps {
  openMovementModal: boolean;
  setOpenMovementModal: Dispatch<SetStateAction<boolean>>;
}

const MovementModalContext = createContext<MovementModalContextProps>(
  {} as MovementModalContextProps
);

export const useMovementModalContext = () => useContext(MovementModalContext);

interface MovementModalContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MovementModalContextProvider = ({
  children,
}: MovementModalContextProviderProps) => {
  const [openMovementModal, setOpenMovementModal] = useState(false);
  return (
    <MovementModalContext.Provider
      value={{
        openMovementModal,
        setOpenMovementModal,
      }}
    >
      {children}
    </MovementModalContext.Provider>
  );
};

export { MovementModalContextProvider };
