import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('API Fetched from useffect Hook')
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log('res', res)
                return res.json();
            })
            .then(data => {
                console.log('json data', data)
                setBlogs(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className='home'>
            { isLoading && <div>Loading...</div>}
            { blogs && <BlogList blogs={ blogs } title='Built By Getroman' /> }
            { blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'Eli') } title='Built By Getroman' /> }
        </div>
    );
}
 
export default Home;