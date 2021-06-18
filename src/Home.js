import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 1},
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 2},
        { title: 'My new website', body: 'the web indeed...', author: 'Eli', id: 3},
    ])

    const handleDelete = (id) => {
        // filter out the blog based on the ID 
        const newBlogs = blogs.filter(blog => blog.id !== id)
        // update the state
        setBlogs(newBlogs)
    }

    return (
        <div className='home'>
            <BlogList blogs={ blogs } title='Built By Getroman' handleDelete={ handleDelete } />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'Eli') } title='Built By Getroman' handleDelete={ handleDelete } />
        </div>
    );
}
 
export default Home;