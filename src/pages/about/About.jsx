import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function About() {
    return (
        <>
            <Navbar />
            <div className="about section">
                <h1>About</h1>
                <p>This is a about section</p>
            </div>
            <Footer />
        </>
    )
}

export default About;