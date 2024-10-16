import Image from "next/image";
import PostInfo from "../../../components/postinfo/PostInfo";
import { posts } from "../../../lib/data";

async function getSinglePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return response.json();
}

const page = async ({ params }) => {
  const singlePost = await getSinglePost(params.postId);
  // const singlePost = posts[params.postId - 1];

  return (
    <div className="flex h-full flex-col gap-10 lg:flex-row xl:gap-24">
      <div className="flex-1">
        <Image className="h-full w-full bg-red-200" />
      </div>
      <div className="flex flex-[2] flex-col gap-7 md:gap-10">
        <h1 className="text-5xl font-semibold">{singlePost.title}</h1>
        <PostInfo userId={singlePost.userId} />
        <p>{singlePost.body}</p>
      </div>
    </div>
  );
};

export default page;
