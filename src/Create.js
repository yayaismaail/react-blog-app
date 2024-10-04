import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yayaismail');
  const [isPending, setIsPending] = useState(false); // For loading state
  const [successMessage, setSuccessMessage] = useState(''); // For success message
  const [errorMessage, setErrorMessage] = useState(''); // For error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const blog = { title, body, author };

    setIsPending(true); // Start loading
    setSuccessMessage(''); // Clear any previous success message
    setErrorMessage(''); // Clear any previous error message

    try {
      const response = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      });

      if (!response.ok) {
        throw new Error('Failed to add the blog');
      }

      setIsPending(false); // Stop loading
      setSuccessMessage('New blog added successfully!'); // Set success message
      setTimeout(() => {
        navigate('/'); // Redirect to home page after a short delay
      }, 2000); // 2-second delay before redirecting
    } catch (error) {
      setIsPending(false); // Stop loading in case of error
      setErrorMessage(`Error: ${error.message}`); // Set error message
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      {/* Conditionally show success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      {/* Conditionally show error message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)} // Update body state
        ></textarea>

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)} // Update author state
        >
          <option value="yayaismail">yayaismail</option>
          <option value="zee adam">zee adam</option>
        </select>

        {!isPending && <button>Add Blog</button>} {/* Show button if not loading */}
        {isPending && <button disabled>Adding Blog...</button>} {/* Show disabled button while adding */}
      </form>
    </div>
  );
};

export default Create;
