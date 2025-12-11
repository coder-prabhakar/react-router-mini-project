import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

function Blog() {
  const data = require('../../data.json');

    return (
        <>
            <Navbar />
            <div className="blog minHeight">
                <h1>Blog</h1>
                <section>
                    {
                        data.blogData.map((item,index)=>(
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <Link to={`/blog/${item.urlText}`} state={item}>View More</Link>
                            </div>
                        ))
                    }
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Blog;