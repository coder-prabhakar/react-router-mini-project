import {Link} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function Page404() {
    return (
        <>
            <Navbar />
            <div className='section'>
                <h1>404 Error</h1>
                <p>This Page Not Found</p>
                <Link to="/">Go to Home Page</Link>
            </div>
            <Footer />
        </>
    )
}

export default Page404;