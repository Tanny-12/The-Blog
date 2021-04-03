import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const { id } = useParams();
    const {data : blog, isLoading, error} = useFetch('http://localhost:4000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:4000/blogs/' + id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    };
    
    return(
        <div className="blog-details">
            {isLoading && <img className="loader" alt="loader" src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" />}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <b>Written by : {blog.author}</b>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>}
        </div>
    );
};

export default BlogDetails;