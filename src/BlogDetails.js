import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import { useState } from 'react';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
  const [deleteError, setDeleteError] = useState('');
  const navigate = useNavigate(); // Use navigate to redirect after deletion

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the blog');
      }

      // Redirect to the home page after successful deletion
      navigate('/');
    } catch (err) {
      setDeleteError(`Error: ${err.message}`);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading, please wait a second...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (blog) {
    return (
      <div className="blog-details">
        <h2>Details</h2>
        <h3>Title: {blog.title}</h3>
        <h3>Written by: {blog.author}</h3>
        <p>{blog.body}</p>

        {/* Delete button */}
        <button onClick={handleDelete}>Delete Blog</button>

        {/* Conditionally show delete error message */}
        {deleteError && <div className="error-message">{deleteError}</div>}
      </div>
    );
  }

  return null;
};

export default BlogDetails;
