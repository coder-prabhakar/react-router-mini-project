import { useParams } from "react-router-dom";

function BlogTopic() {
  const params = useParams();

  return (
    <div className='BlogTopic minHeight'>
      <h1>{params.topicName} Blog</h1>
    </div>
  )
}

export default BlogTopic;
