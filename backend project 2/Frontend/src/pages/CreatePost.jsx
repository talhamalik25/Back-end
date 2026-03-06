import React from 'react'
import axios from 'axios'

const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:5000/create-post", formData)
    .then((res)=> {
      // alert("Post created successfully");
      // e.target.reset();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      alert("Error creating post");
    })
      

  }
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Post
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Image Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              className="border border-gray-300 rounded-md p-2 file:bg-black file:text-white file:px-4 file:py-1 file:border-0 file:rounded-md cursor-pointer"
            />
          </div>

          {/* Caption */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Caption
            </label>
            <input
              type="text"
              name="caption"
              required
              placeholder="Write caption..."
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  )
}

export default CreatePost