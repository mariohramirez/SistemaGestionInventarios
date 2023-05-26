import { createContext } from "react";

export const LayoutContext = createContext({
    showLeftMenu: false,
    setShowLeftMenu: (v: boolean) => {}
});