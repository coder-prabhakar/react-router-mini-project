import './Children.css'; 
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function ThirdChild() {
    return (
        <>
            <Navbar />
            <div  className="stylePage section">
                <h1>Third Page</h1>
            </div>
            <Footer />
        </>
    )
}

export default ThirdChild;