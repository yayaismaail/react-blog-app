import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    
    const title = 'All Blogs!';

    if (isLoading) {
      return <div className="loading">Loading, please wait a second...</div>;
    }
  
    if (error) {
      return <div className="error">Error: {error}</div>;
    }

    if (blogs.length > 0) {
      
      return (
        <div className="home">
          <BlogList blogs={blogs} title={title} />
        </div>
    );
    }
    
    return <div>No blogs to display</div>;
    
}
 
export default Home;