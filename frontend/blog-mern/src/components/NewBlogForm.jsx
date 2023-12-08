import { useContext, useState } from 'react';
import axios from 'axios';
import BackToAdminBtn from './BackToAdminBtn';
import BlogContext from '../contexts/BlogContext';
// eslint-disable-next-line react/prop-types
function NewBlogForm() {
  const { addNewPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/posts/', {
        title,
        content,
        author,
        thumbnail,
      });
      console.log(res);
      if (res.status === 201 || res.status === 200) {
        addNewPost(res.data);
      }
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-3 max-w-5xl mx-auto">
      <BackToAdminBtn />
      <h2 className="font-bold text-4xl  w-full  py-4">
        Create a new Blog Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center p-2"
      >
        <label htmlFor="title" className="text-2xl w-full">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black rounded-md p-1 w-full"
          value={title}
        />
        <label htmlFor="thumbnail" className="text-2xl w-full">
          Thumbnail Image Source:
        </label>
        <input
          type="text"
          name="thumbnail"
          id="thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
          className="border-2 border-black rounded-md p-1 w-full"
          value={thumbnail}
        />
        <label htmlFor="content" className="text-2xl w-full">
          Content:
        </label>
        <textarea
          type="text"
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
          className="border-2 border-black rounded-md h-56 w-full"
          value={content}
          placeholder="Add content as it should appear in paragraphs"
        />
        <label htmlFor="title" className="text-2xl w-full">
          Author:
        </label>
        <input
          type="text"
          name="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
          className="border-2 border-black rounded-md p-1 w-full"
          value={author}
        />
        <button className="bg-gray-400 p-2 rounded-md m-4">Create Post</button>
      </form>
    </div>
  );
}

export default NewBlogForm;
