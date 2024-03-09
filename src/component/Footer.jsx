import {useNavigate} from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();

  function navToPage(pageName){
    switch(pageName){
      case "Blog":
        navigate('/blog')
        break;
      case "About":
        navigate('/about')
        break;
      default:
        navigate('/')
    }
  }

  return (
    <div className="footer">
      <p>&copy; copyright reserved @prabhakar</p>
      <div>
        <h3>Pages</h3>
        <span onClick={()=> navToPage('Home')}>Home</span>
        <button onClick={()=> navToPage('About')}>About</button>
        <button onClick={()=> navigate('Blog')}>Blog</button>
      </div>
    </div>
  )
}

export default Footer
