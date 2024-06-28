import {useParams, useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/"+blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {error && <div>could not fetch data for that resource</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;