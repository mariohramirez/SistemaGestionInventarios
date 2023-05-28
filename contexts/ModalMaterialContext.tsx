import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface MaterialModalContextProps {
  openMaterialModal: boolean;
  setOpenMaterialModal: Dispatch<SetStateAction<boolean>>;
}

const MaterialModalContext = createContext<MaterialModalContextProps>(
  {} as MaterialModalContextProps
);

export const useMaterialModalContext = () => useContext(MaterialModalContext);

interface MaterialModalContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MaterialModalContextProvider = ({
  children,
}: MaterialModalContextProviderProps) => {
  const [openMaterialModal, setOpenMaterialModal] = useState(false);
  return (
    <MaterialModalContext.Provider
      value={{
        openMaterialModal,
        setOpenMaterialModal,
      }}
    >
      {children}
    </MaterialModalContext.Provider>
  );
};

export { MaterialModalContextProvider };
