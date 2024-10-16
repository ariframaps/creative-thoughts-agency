import PostCard from "../../components/postcard/PostCard";
import { getPosts } from "../../lib/data";
// import { posts } from "./../../lib/data";

// async function getPosts() {
//   const response = await fetch("https://localhost:3000/api/blog", {
//     next: { revalidate: 3600 },
//   });
//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// }

export default async function BlogPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
