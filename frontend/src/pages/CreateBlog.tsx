import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Post } from '../types/main';
import { categories } from '../constants/main';
import { createPost } from '../services/requst';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const navigate = useNavigate();
  const defaultValue = {
    id: '',
    title: '',
    image: '',
    category: '',
    post: '',
    createdate: ''
  }
  
  const  [newPost, setNewPost] = useState<Post>(defaultValue)

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewPost({...newPost, image: e.target.files[0]});
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    
    if (categories.includes(newPost.category.toLowerCase())) {
      console.log('hi')
      try {
        const formData = new FormData();
        formData.append('title', newPost.title);
        formData.append('post', newPost.post);
        formData.append('category', newPost.category);
        formData.append('id', '');
        formData.append('createdata', newPost.createdate);

        if (newPost.image) {
          formData.append('file', newPost.image);
        }

        const res = await createPost(formData);

        setNewPost(defaultValue)
        navigate(`/blog/${res.id}` )
        console.log(res)
      } catch (e) {
        console.log('Hmm... Something go wrond try again', e)
      }
    }

};

  return (
    <div className="flex w-full px-5 py-5  justify-center items-center font-roboto shadow-2xl">
      <div className="flex flex-col items-center bg-gray-100 rounded-xl p-5 w-7/12">
        <h1 className="text-xl font-bold text-start w-full pb-6">Create Blog Post</h1>
        <form onSubmit={(e) => handleSubmit(e)}  className="w-full flex flex-col items-start gap-1 font-medium text-black/80 ">
            <label htmlFor="text">Title</label>
            <input onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="w-full h-10 rounded-lg px-4 focus:border-color-whyte border-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow-md text-sm" required type="text" name="text" id="text" />
            <label className="pt-4" htmlFor="category">Category</label>
            <select onChange={(e) => setNewPost({...newPost, category: e.target.value.toLowerCase() })} className="w-full h-10 rounded-lg px-2 focus:border-color-whyte border-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow-md text-sm" required name="category" id="category">
              <option value="" selected disabled></option>
              <option value="Nature">Nature</option>
              <option value="Technology">Technology</option>
              <option value="Learning">Learning</option>
              <option value="Motivation">Motivation</option>
            </select>
            <label className="pt-4" htmlFor="image">Image</label>
            <input onChange={(e) => handleFile(e)} className="text-sm " type="file" name="file" id="image" required />
            <label className="pt-4"  htmlFor="post">Post</label>
            {/* <textarea  name="post" id="post"> </textarea> */}
            <ReactQuill onChange={(e) => setNewPost({...newPost, post: e})} className='bg-white w-full text-start h-[300px] pb-11 bg-white rounded-lg'  theme="snow" value={newPost.post}  />

            <button className="mt-4 text-white bg-black px-8 py-2 rounded-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog
