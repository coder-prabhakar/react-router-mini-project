import {Link} from 'react-router-dom';

function Page404() {
  return (
    <div style={{minHeight:"calc(100vh - 170px)"}}>
        <h1>404 Error</h1>
        <p>This Page Not Found</p>
        <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default Page404
