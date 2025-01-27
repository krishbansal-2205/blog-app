import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import Container from '../components/container/Container';
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    appwriteService.getPosts([]).then((post)=>{
      setPosts(post.documents);
    })
  },[])

  if (posts.length === 0) {
    return <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          <h1>No post to read</h1>
        </div>
      </Container>
    </div>
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post)=>(
            <div className='w-1/4 p-2' key={post.$id}>
              <PostCard {...post} />
            </div>
          )) 
          }
        </div>
      </Container>
    </div>
  )
}

export default AllPost