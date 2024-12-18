'use client';

import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';

import type { IBlog } from '../CreateBlog';

function HomePage() {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);

  useEffect(() => {
    // mock api
    const getBlogs = () => {
      // const response = axios.get('/api/blogs');
      // if(response) setBlogs(response.data);
      const blogs = localStorage.getItem('blogs');
      if (blogs) {
        setBlogs(JSON.parse(blogs));
      }
    };

    getBlogs();
  }, []);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
    setBlogs(newBlogs);
  };

  return (
    <div className="container mx-auto space-y-5 py-10">
      {blogs?.map((blog) => {
        return (
          <div key={blog.name} className="border border-black p-5 rounded-lg">
            <p>{blog?.id || 0}</p>
            <p>{blog.name}</p>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
            <Button onClick={() => handleDelete(blog?.id || 0)}>Delete</Button>
          </div>
        );
      })}{' '}
    </div>
  );
}

export default HomePage;
