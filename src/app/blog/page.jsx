import PostCard from "@/components/postcard/PostCard";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
}
