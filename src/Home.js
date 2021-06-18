import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 1},
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 2},
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 3},
    ])

    return (
        <div className='home'>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;