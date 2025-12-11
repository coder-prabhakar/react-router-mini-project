import './Children.css'; 
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function FirstChild() {
    return (
        <>
            <Navbar />
            <div  className="stylePage section">
                <h1>First Page</h1>
            </div>
            <Footer />
        </>
    )
}

export default FirstChild;
