import { useParams } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();

    return ( 
        <div className='blog-details'>
            <h2>Blog</h2>
            <p>The id of the blog post - { id }</p>
        </div>
     );
}
 
export default BlogDetails;