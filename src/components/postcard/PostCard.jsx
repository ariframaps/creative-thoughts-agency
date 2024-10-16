import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div>
      <div className="flex items-center">
        {post.img && <img className="h-64 w-44 bg-red-200" src={post.img} />}
        <span className="rotate-90">02.06.2024</span>
      </div>
      <div className="pe-7">
        <h3 className="my-5 text-2xl font-bold">{post.title}</h3>
        <p>{post.desc}..</p>
        <Link href={`/blog/${post.id}`} className="mt-5 block w-fit">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
