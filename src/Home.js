import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 1},
        { title: 'My new website', body: 'the web indeed...', author: 'Heriberto', id: 2},
        { title: 'My new website', body: 'the web indeed...', author: 'Eli', id: 3},
    ])

    return (
        <div className='home'>
            <BlogList blogs={ blogs } title='Built By Getroman' />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'Eli') } title='Built By Getroman' />
        </div>
    );
}
 
export default Home;