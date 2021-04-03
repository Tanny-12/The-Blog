import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const {data : blogs, isLoading, error} = useFetch('http://localhost:4000/blogs');
    return(
      <div className="home">
        {error && <div> {error} </div>}
        {isLoading && <img className="loader" alt="loader" src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" />}
        {blogs && <Bloglist blogs={blogs} title="All blogs"/>}
      </div>
    );
}

export default Home;