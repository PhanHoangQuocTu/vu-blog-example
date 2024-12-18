'use client';

import React from 'react';
import Link from 'next/link';

const ROUTES = {
  HOME: '/',
  CREATE_BLOG: '/create-blog',
};

const nav = [
  {
    name: 'Home',
    href: ROUTES.HOME,
  },
  {
    name: 'Create Blog',
    href: ROUTES.CREATE_BLOG,
  },
];

const Header = () => {
  return (
    <div className="w-full flex gap-4 px-10 py-2 bg-black">
      {nav?.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-white hover:opacity-50 transition-all duration-300 ease-in-out"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
