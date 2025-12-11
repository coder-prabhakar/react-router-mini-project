import { Navigate } from 'react-router';
import { useCommonContext } from '../contextAPI/CommonContext';


export default function ProtectedRoute({ children }) {
    const { isLogin } = useCommonContext();

    if(!isLogin) { 
        return <Navigate to={'/login'} replace={true} />; 
    };

    return <>{children}</>;
}