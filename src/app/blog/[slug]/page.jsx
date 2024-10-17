import Image from "next/image";
import PostInfo from "../../../components/postinfo/PostInfo";
// import { getSinglePost } from "../../../lib/data";
import { posts } from "../../../lib/data";

async function getSinglePost(slug) {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
}

const page = async ({ params }) => {
  const singlePost = await getSinglePost(params.slug);
  // const singlePost = posts[params.postId - 1];

  return (
    <div className="flex h-full flex-col gap-10 lg:flex-row xl:gap-24">
      <div className="flex-1">
        {singlePost.img && (
          <img className="h-full w-full bg-red-200" src={singlePost.img} />
        )}
      </div>
      <div className="flex flex-[2] flex-col gap-7 md:gap-10">
        <h1 className="text-5xl font-semibold">{singlePost.title}</h1>
        <PostInfo userId={singlePost.userId} />
        <p>{singlePost.desc}</p>
      </div>
    </div>
  );
};

export default page;
