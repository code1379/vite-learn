import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Article from './page/Article';
import Blog from './page/Blog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Article</Link> | <Link to="/blog">Blog</Link>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
