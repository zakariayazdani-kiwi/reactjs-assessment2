import logo from './logo.svg';
import Blog from './BlogPage/Blog';
import NavBar from './BlogPage/NavBar';
import CreateNewBlog from './BlogPage/CreateNewBlog';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import BlogDetail from './BlogPage/BlogDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    <CreateNewBlog />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blog />}/>
      <Route path='/blogdetail' element={<BlogDetail />}/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
