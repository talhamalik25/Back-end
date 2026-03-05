import React, { useState } from 'react'
import CreatePost from './CreatePost'

const Feed = () => {

  const [posts, _setPosts] = useState([
    {
      _id: "1",
      image: "https://picsum.photos/400/300?1",
      caption: "First post caption"
    },
    {
      _id: "2",
      image: "https://picsum.photos/400/300?2",
      caption: "Second post caption"
    },
    {
      _id: "3",
      image: "https://picsum.photos/400/300?3",
      caption: "Enjoying the day!"
    },
    {
      _id: "4",
      image: "https://picsum.photos/400/300?4",
      caption: "Nature is beautiful 🌿"
    }
  ])

  return (
    <div>
      <section className="max-w-xl mx-auto mt-10 flex flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
              <img src={post.image} alt="" className="w-full h-60 object-cover"/>
              <p className="p-4 text-gray-700">{post.caption}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </section>
    </div>
  )
}

export default Feed