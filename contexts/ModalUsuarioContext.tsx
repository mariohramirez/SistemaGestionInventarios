import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface UserModalContextProps {
  openUserModal: boolean;
  setOpenUserModal: Dispatch<SetStateAction<boolean>>;
}

const UserModalContext = createContext<UserModalContextProps>(
  {} as UserModalContextProps
);

export const useUserModalContext = () => useContext(UserModalContext);

interface UserModalContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserModalContextProvider = ({
  children,
}: UserModalContextProviderProps) => {
  const [openUserModal, setOpenUserModal] = useState(false);
  return (
    <UserModalContext.Provider
      value={{
        openUserModal,
        setOpenUserModal,
      }}
    >
      {children}
    </UserModalContext.Provider>
  );
};

export { UserModalContextProvider };
