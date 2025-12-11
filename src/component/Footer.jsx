import { useNavigate } from 'react-router';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <p>&copy; copyright reserved @prabhakar</p>
            <div>
                <h3>Pages</h3>
                <button onClick={()=> navigate('/')}>Home</button>
                <button onClick={()=> navigate('/about')}>About</button>
                <button onClick={()=> navigate('/blog')}>Blog</button>
            </div>
        </div>
    )
}

export default Footer;