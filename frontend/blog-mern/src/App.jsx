import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { useState } from 'react';
import Admin from './pages/Admin.jsx';
import Post from './pages/Post.jsx';
import Create from './pages/Create.jsx';
import Delete from './pages/Delete.jsx';
import Update from './pages/Update.jsx';
import { BlogProvider } from './contexts/BlogContext.jsx';
// import axios from 'axios';
function App() {
  const [activePostID, setActivePostID] = useState(null);

  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setActivePostID={setActivePostID}
                activePostID={activePostID}
              />
            }
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/post/:id" element={<Post id={activePostID} />}></Route>
          <Route path="/create" element={<Create />} />
          <Route
            path="/delete"
            element={
              <Delete
                // allPosts={posts}
                setActivePostID={setActivePostID}
                activePostID={activePostID}
                // setPosts={setPosts}
              />
            }
          />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
