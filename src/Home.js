import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className='home'>
            {error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            { blogs && <BlogList blogs={ blogs } title='Built By Getroman' /> }
            { blogs && <BlogList blogs={ blogs.filter((blog) => blog.author === 'Eli') } title='Built By Getroman' /> }
        </div>
    );
}
 
export default Home;