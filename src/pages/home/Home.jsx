import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <div className="home section">
                <h1>Home</h1>
                <p>Hey, I am Prabhakar</p>
            </div>
            <Footer />
        </>
    )
}

export default Home;
