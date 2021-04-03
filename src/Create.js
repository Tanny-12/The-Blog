import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('auth1');
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setLoading(true);
        fetch('http://localhost:4000/blogs', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setLoading(false);
            console.log('new blog added');
            history.push('/');
        }); 
    };

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input
                    required
                    type="text"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />

                <label>Blog Description :</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                />

                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="auth1">auth1</option>
                    <option value="auth2">auth2</option>
                </select>

                {!isLoading && <button>Add</button>}
                {isLoading && <button disabled>Adding the blog...</button>}
            </form>
        </div>
    );
};

export default Create;