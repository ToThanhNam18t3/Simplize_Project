import Blog from './pages/Blog';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-detail' element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
