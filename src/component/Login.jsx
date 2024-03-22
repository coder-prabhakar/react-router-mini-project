import { useSelector, useDispatch } from "react-redux";

function Login() {
    const loginStatus = useSelector((state) => state.userStatus );
    const dispatch = useDispatch();

    const loginStyle = {
        minHeight:"calc(100vh - 120px)",
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }

  return (
    <div style={loginStyle}>
      <h1>{(loginStatus)?"You are Successfully login":"Please login"}</h1>
      <div style={{display:'flex',gap:'30px'}}>
        <button onClick={()=> dispatch({type:'LOGIN', currentStatus:true})}>Login</button>
        <button onClick={()=> dispatch({type:'LOGOUT', currentStatus:false})}>Logout</button>
      </div>
    </div>
  )
}

export default Login;