import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface SidebarContextProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContextProvider };
