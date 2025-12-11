import './Children.css'; 
import {
  Link,
  // Outlet,
} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function Parent() {
    return (
        <>
            <Navbar />
            <div className='section'>
                <div className='child-navbar'>
                    <Link className='link' to="first-page">First-Page</Link>
                    <Link className='link' to="second-page">Second-Page</Link>
                    <Link className='link' to="third-page">Third-Page</Link>
                </div>
                {/* <div>
                    <Link to="first-page">First-Page</Link> &nbsp; &nbsp;
                    <Link to="second-page">Second-Page</Link> &nbsp; &nbsp;
                    <Link to="third-page">Third-Page</Link>
                    <Outlet />
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default Parent;