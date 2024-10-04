import './Navbar.css';
import Home from './Home';
import Create from './Create';
import About from './About';
import Contact from './Contacts';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
            <div className="App">
                <nav className='navbar'>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link to="/create">New Blog</Link>
                        </li>
                    </ul>
                </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
    </Router>
    );
}
 
export default Navbar;