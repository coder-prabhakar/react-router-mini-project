import { Link } from 'react-router-dom';

function Blog() {
  const data = require('../data.json');

  return (
    <div className="blog minHeight">
      <h1>Blog</h1>
      <section>
          {
              data.blogData.map((item,index)=>(
                  <div key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                      <Link to={`/blog/${item.urlText}`}>View More</Link>
                  </div>
              ))
          }
      </section>
    </div>
  )
}

export default Blog;