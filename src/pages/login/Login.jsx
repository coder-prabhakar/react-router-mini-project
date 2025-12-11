import { useCommonContext } from '../../contextAPI/CommonContext';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function Login() {
    const { isLogin, onLogin, onLogout } = useCommonContext();

    // const loginStyle = {
    //     minHeight:"calc(100vh - 120px)",
    //     display:"flex",
    //     flexDirection:'column',
    //     alignItems:'center',
    //     justifyContent:'center',
    // }

    return (
        <>
            <Navbar />
            <div className='section'>
                <h1>{ isLogin ? "You are Successfully login" : "Please login" }</h1>
                <div style={{display:'flex',gap:'30px'}}>
                    <button onClick={onLogin}>Login</button>
                    <button onClick={onLogout}>Logout</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;