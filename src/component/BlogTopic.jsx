import { useParams, useLocation } from "react-router-dom";
  
function BlogTopic() {
  const params = useParams();
  const blogData = useLocation();
  console.log(blogData)

  return (
    <div className='BlogTopic minHeight' style={{padding:"0 200px"}}>
      <h1>{params.topicName} Blog</h1>
      <hr/>
      <h1>{blogData.state.title}</h1>
      <p>{blogData.state.content}</p>
    </div>
  )
}

export default BlogTopic;