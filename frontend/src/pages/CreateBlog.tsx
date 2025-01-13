import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function CreateBlog() {
  const [postContent, setPostContent] = useState<string>('');

  return (
    <div className="flex w-full px-5 py-5  justify-center items-center font-roboto shadow-2xl">
      <div className="flex flex-col items-center bg-gray-100 rounded-xl p-5 w-7/12">
        <h1 className="text-xl font-bold text-start w-full pb-6">Create Blog Post</h1>
        <form className="w-full flex flex-col items-start gap-1 font-medium text-black/80 ">
            <label htmlFor="text">Title</label>
            <input className="w-full h-10 rounded-lg px-4 focus:border-color-whyte border-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow-md text-sm" type="text" name="text" id="text" />
            <label className="pt-4" htmlFor="category">Category</label>
            <select className="w-full h-10 rounded-lg px-2 focus:border-color-whyte border-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow-md text-sm" name="category" id="category">
              <option value="Nature">Nature</option>
              <option value="Technology">Technology</option>
              <option value="Learning">Learning</option>
              <option value="Motivation">Motivation</option>
            </select>
            <label className="pt-4"  htmlFor="image">Image</label>
            <input className="text-sm " type="file" name="image" id="image" />
            <label className="pt-4"  htmlFor="post">Post</label>
            {/* <textarea  name="post" id="post"> </textarea> */}
            <ReactQuill className='bg-white w-full text-start h-[300px] pb-11 bg-white rounded-lg' theme="snow" value={postContent} onChange={(e:string) => setPostContent(e)} />

            <button className="mt-4 text-white bg-black px-8 py-2 rounded-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog
