'use client';

import { signOut } from "next-auth/react";

const BlogPage = () => {
  return (
    <div>
        Hello Blog
        <button onClick={()=> signOut()}>Logout</button>
    </div>
  );
};

export default BlogPage;