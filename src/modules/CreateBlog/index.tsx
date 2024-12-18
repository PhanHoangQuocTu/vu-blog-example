'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VStack } from '@/components/ui/v-stack';

export interface IBlog {
  id?: number;
  name: string;
  content: string;
  author: string;
}

const DEFAULT_STATE: IBlog = {
  name: '',
  content: '',
  author: '',
};

const CreateBlogPage = () => {
  const [state, setState] = useState<IBlog>(DEFAULT_STATE);

  useEffect(() => {
    setState(DEFAULT_STATE);
  }, []);

  const createBlog = () => {
    // step 1: create blog
    const blog: IBlog = {
      name: state.name,
      content: state.content,
      author: state.author,
    };

    // step 2: check exist blogs
    // @ts-ignore
    const existBlogs: IBlog[] | null = localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : null;

    // step 3: save blog in localstorage
    if (existBlogs) {
      localStorage.setItem('blogs', JSON.stringify([...existBlogs, { ...blog, id: existBlogs?.length + 1 }]));
    } else {
      localStorage.setItem('blogs', JSON.stringify([{ ...blog, id: 1 }]));
    }

    // step 4: back to home
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto py-10">
      <VStack spacing={20}>
        <div className="space-y-2">
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label>Name</label>
          <Input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
        </div>
        <div className="space-y-2">
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label>Content</label>
          <Input value={state.content} onChange={(e) => setState({ ...state, content: e.target.value })} />
        </div>

        <div className="space-y-2">
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label>Author</label>
          <Input value={state.author} onChange={(e) => setState({ ...state, author: e.target.value })} />
        </div>

        <Button onClick={createBlog} className="w-full">
          Create Blog
        </Button>
      </VStack>
    </div>
  );
};

export default CreateBlogPage;
