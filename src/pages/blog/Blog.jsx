import { useParams, useLocation } from "react-router-dom";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
  
export default function Blog() {
    const params = useParams();
    const blogData = useLocation();
    console.log(params);
    console.log(blogData);

    return (
        <>
            <Navbar />
            <div className='section'>
                <h1>{blogData.state.title}</h1>
                <p>{blogData.state.content}</p>
            </div>
            <Footer />
        </>
    )
}
