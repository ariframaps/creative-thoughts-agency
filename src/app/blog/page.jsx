import PostCard from "@/components/postcard/PostCard";

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
