import { createContext, useContext, useState } from "react";

export const CommonContext = createContext();

export default function ContextProvider({ children }){
    const [isLogin,setIsLogin] = useState(false);

    const onLogin = () => setIsLogin(true);
    const onLogout = () => setIsLogin(false);
    
    return (
        <CommonContext.Provider value={{ isLogin, onLogin, onLogout }}>
            {children}
        </CommonContext.Provider>
    )
}

export const useCommonContext = () => {
    const context = useContext(CommonContext);
    return context;
};