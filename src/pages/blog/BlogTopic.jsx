import { useParams, useLocation } from "react-router-dom";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
  
function BlogTopic() {
    const params = useParams();
    const blogData = useLocation();
    console.log(blogData)

    return (
        <>
            <Navbar />
            <div className='BlogTopic minHeight' style={{padding:"0 200px"}}>
                <h1>{params.topicName} Blog</h1>
                <hr/>
                <h1>{blogData.state.title}</h1>
                <p>{blogData.state.content}</p>
            </div>
            <Footer />
        </>
    )
}

export default BlogTopic;