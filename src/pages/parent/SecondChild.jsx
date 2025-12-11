import './Children.css'; 
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function SecondChild() {
    return (
        <>
            <Navbar />
            <div  className="stylePage section">
                <h1>Second Child</h1>
            </div>
            <Footer />
        </>
    )
}

export default SecondChild;
