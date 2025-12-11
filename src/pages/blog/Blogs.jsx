import { Link } from 'react-router';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Blogs() {
    const data = require('../../data.json');

    return (
        <>
            <Navbar />
            <div className="blog minHeight">
                <h1>Blog</h1>
                <section>
                    {
                        data?.blogData.map(
                            (item,index) => <Card key={index} item={item} />
                        )
                    }
                </section>
            </div>
            <Footer />
        </>
    )
};

function Card(props) {
    const { title, content } = props.item;

    const url = title.trim().split(" ").join("-");

    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <Link to={`/blog/${url}`} state={props.item}>View More</Link>
        </div>
    )
};